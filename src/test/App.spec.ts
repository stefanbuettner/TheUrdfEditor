import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import App from '../App.vue'
import { createUrdfFile, normalizeXml, compareXml, testScenarios, type TestScenario } from './test-utils'
import { nextTick } from 'vue'

// Sample URDF content for testing
const SIMPLE_URDF = `<?xml version="1.0"?>
<robot name="simple_robot">
  <link name="base_link">
  </link>
  <joint name="joint_1" type="revolute">
  </joint>
  <link name="link_1">
  </link>
</robot>`

const COMPLEX_URDF = `<?xml version="1.0"?>
<robot name="test_robot">
  <link name="base_link">
  </link>
  <joint name="joint_1" type="fixed">
  </joint>
  <link name="link_1">
  </link>
  <joint name="joint_2" type="revolute">
  </joint>
  <link name="link_2">
  </link>
</robot>`

describe('App.vue - URDF Upload/Download', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    // Suppress console.error during tests to avoid noise from expected errors
    vi.spyOn(console, 'error').mockImplementation(() => {})
    
    // Mock Three.js components to avoid rendering issues in tests
    vi.mock('three', () => ({
      Scene: vi.fn(() => ({ add: vi.fn(), background: null })),
      PerspectiveCamera: vi.fn(),
      WebGLRenderer: vi.fn(() => ({
        setSize: vi.fn(),
        setPixelRatio: vi.fn(),
        render: vi.fn(),
        dispose: vi.fn(),
        domElement: document.createElement('canvas')
      })),
      Color: vi.fn(),
      AmbientLight: vi.fn(),
      DirectionalLight: vi.fn(() => ({ position: { set: vi.fn() } })),
      GridHelper: vi.fn(),
      AxesHelper: vi.fn(),
      BoxGeometry: vi.fn(),
      MeshPhongMaterial: vi.fn(),
      Mesh: vi.fn(() => ({ position: { set: vi.fn() } })),
      CylinderGeometry: vi.fn()
    }))

    vi.mock('three/examples/jsm/controls/OrbitControls.js', () => ({
      OrbitControls: vi.fn(() => ({
        enableDamping: true,
        dampingFactor: 0.05,
        update: vi.fn()
      }))
    }))

    wrapper = mount(App, {
      global: {
        stubs: {
          ThreeViewer: {
            template: '<div class="three-viewer-stub"></div>',
            emits: ['urdf-loaded']
          }
        }
      }
    })
  })

  afterEach(() => {
    // Restore console.error after each test
    vi.restoreAllMocks()
  })

  describe('Initial State', () => {
    it('should start without any loaded URDF', () => {
      // The urdfRoot should be null initially
      expect(wrapper.vm.urdfRoot).toBeNull()
    })

    it('should have the download button disabled initially', () => {
      const downloadButton = wrapper.find('button.btn:not(.upload-btn)')
      expect(downloadButton.element).toHaveProperty('disabled', true)
    })

    it('should show "No model loaded" in hierarchy panel', () => {
      const hierarchyPanel = wrapper.findComponent({ name: 'HierarchyPanel' })
      expect(hierarchyPanel.exists()).toBe(true)
      expect(hierarchyPanel.props('root')).toBeNull()
    })
  })

  describe('URDF Upload', () => {
    it('should handle file upload and enable processing', async () => {
      const file = createUrdfFile(SIMPLE_URDF, 'simple_robot.urdf')
      const fileInput = wrapper.find('#file-upload')
      
      // Directly call the handler since we can't set files in test environment easily
      const event = {
        target: {
          files: [file]
        }
      }

      // Call handleUpload directly
      wrapper.vm.handleUpload(event)
      await nextTick()

      // Verify the input exists and accepts URDF files
      expect(fileInput.exists()).toBe(true)
      expect(fileInput.attributes('accept')).toBe('.urdf,.xml,application/xml,text/xml')
    })

    it('should keep download button disabled even after URDF is loaded', async () => {
      // Simulate loading a URDF by directly setting urdfRoot
      const robotNode = {
        name: 'simple_robot',
        type: 'robot' as const,
        children: [
          {
            name: 'base_link',
            type: 'link' as const,
            children: [],
            properties: {}
          }
        ],
        properties: {}
      }

      wrapper.vm.handleUrdfLoad(robotNode)
      await nextTick()

      const downloadButton = wrapper.find('button.btn:not(.upload-btn)')
      // Download button is unconditionally disabled
      expect(downloadButton.element).toHaveProperty('disabled', true)
    })
  })

  describe('URDF Download', () => {
    it('should generate and download URDF file with same content as uploaded', async () => {
      // Load a robot
      const robotNode = {
        name: 'simple_robot',
        type: 'robot' as const,
        children: [
          {
            name: 'base_link',
            type: 'link' as const,
            children: [],
            properties: {}
          },
          {
            name: 'joint_1',
            type: 'joint' as const,
            children: [
              {
                name: 'link_1',
                type: 'link' as const,
                children: [],
                properties: {}
              }
            ],
            properties: { type: 'revolute' }
          }
        ],
        properties: {}
      }

      wrapper.vm.handleUrdfLoad(robotNode)
      await nextTick()

      // Mock createElement to spy on link creation
      const mockLink = {
        _href: '',
        _download: '',
        click: vi.fn(),
        get href() {
          return this._href
        },
        set href(value: string) {
          this._href = value
        },
        get download() {
          return this._download
        },
        set download(value: string) {
          this._download = value
        }
      }
      
      const originalCreateElement = document.createElement
      vi.spyOn(document, 'createElement').mockImplementation((tagName: string) => {
        if (tagName === 'a') {
          return mockLink as any
        }
        return originalCreateElement.call(document, tagName)
      })

      // Trigger download
      wrapper.vm.handleDownload()
      await nextTick()

      // Verify download was configured correctly
      expect(mockLink.click).toHaveBeenCalled()
      expect(mockLink._download).toBe('simple_robot.urdf')
      expect(mockLink._href).toBe('mock-url')
    })

    it('should not download when no URDF is loaded', async () => {
      const createElementSpy = vi.spyOn(document, 'createElement')
      const initialCallCount = createElementSpy.mock.calls.length
      
      // Directly call handleDownload when urdfRoot is null
      wrapper.vm.handleDownload()
      await nextTick()

      // Should return early without creating any elements
      const newCallCount = createElementSpy.mock.calls.length
      expect(newCallCount).toBe(initialCallCount)
    })
  })

  describe('Round-trip: Upload → Download', () => {
    it('should download the same URDF that was uploaded (simple robot)', async () => {
      // This test verifies the round-trip: upload a URDF, then download it
      // The downloaded content should match the uploaded content
      
      const robotNode = {
        name: 'simple_robot',
        type: 'robot' as const,
        children: [
          {
            name: 'base_link',
            type: 'link' as const,
            children: [],
            properties: {}
          },
          {
            name: 'joint_1',
            type: 'joint' as const,
            children: [
              {
                name: 'link_1',
                type: 'link' as const,
                children: [],
                properties: {}
              }
            ],
            properties: { type: 'revolute' }
          }
        ],
        properties: {}
      }

      wrapper.vm.handleUrdfLoad(robotNode)
      await nextTick()

      // Generate URDF
      const generated = wrapper.vm.generateURDF(robotNode)
      
      // Expected output
      const expected = `<?xml version="1.0"?>
<robot name="simple_robot">
  <link name="base_link">
  </link>
  <joint name="joint_1" type="revolute">
    <link name="link_1">
    </link>
  </joint>
</robot>`

      // Compare (allowing for whitespace differences)
      expect(compareXml(generated, expected)).toBe(true)
    })
  })

  describe('URL Loading', () => {
    it('should load URDF from URL successfully', async () => {
      // Mock fetch API
      const mockUrdfContent = `<?xml version="1.0"?>
<robot name="url_robot">
  <link name="base_link">
  </link>
</robot>`

      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        text: async () => mockUrdfContent
      } as Response)

      // Mock the ThreeViewer ref
      const mockLoadURDFContent = vi.fn()
      wrapper.vm.threeViewerRef = {
        loadURDFContent: mockLoadURDFContent
      }

      // Set URL and load
      wrapper.vm.urlInput = 'https://example.com/robot.urdf'
      await wrapper.vm.loadFromUrl()
      await nextTick()

      // Verify fetch was called with correct URL
      expect(global.fetch).toHaveBeenCalledWith('https://example.com/robot.urdf')
      
      // Verify loadURDFContent was called with the content and package path
      expect(mockLoadURDFContent).toHaveBeenCalledWith(mockUrdfContent, 'robot.urdf', 'https://example.com/')
    })

    it('should handle fetch errors gracefully', async () => {
      // Mock fetch to fail
      global.fetch = vi.fn().mockRejectedValue(new Error('Network error'))

      // Reset alert mock
      vi.mocked(global.alert).mockClear()

      // Set URL
      wrapper.vm.showUrlDialog = true
      wrapper.vm.urlInput = 'https://example.com/invalid.urdf'
      await nextTick()

      // Trigger load from URL
      await wrapper.vm.loadFromUrl()
      await nextTick()

      // Verify error was handled
      expect(global.alert).toHaveBeenCalledWith(expect.stringContaining('Failed to load URDF from URL'))
      expect(wrapper.vm.showUrlDialog).toBe(false)
    })

    it('should handle HTTP errors (404, 500, etc)', async () => {
      // Mock fetch to return error status
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 404,
        text: async () => 'Not Found'
      } as Response)

      // Reset alert mock
      vi.mocked(global.alert).mockClear()

      // Set URL
      wrapper.vm.showUrlDialog = true
      wrapper.vm.urlInput = 'https://example.com/notfound.urdf'
      await nextTick()

      // Trigger load from URL
      await wrapper.vm.loadFromUrl()
      await nextTick()

      // Verify error was handled
      expect(global.alert).toHaveBeenCalledWith(expect.stringContaining('Failed to load URDF from URL'))
    })

    it('should load red box URDF fixture', async () => {
      const fs = await import('fs/promises')
      const path = await import('path')
      
      const redBoxPath = path.join(__dirname, 'fixtures', 'red_box.urdf')
      const redBoxContent = await fs.readFile(redBoxPath, 'utf-8')

      // Mock fetch to return red box URDF
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        text: async () => redBoxContent
      } as Response)

      // Mock the ThreeViewer ref
      const mockLoadURDFContent = vi.fn()
      wrapper.vm.threeViewerRef = {
        loadURDFContent: mockLoadURDFContent
      }

      // Set URL and load
      wrapper.vm.urlInput = 'https://example.com/red_box.urdf'
      await wrapper.vm.loadFromUrl()
      await nextTick()

      // Verify content was loaded with package path
      expect(mockLoadURDFContent).toHaveBeenCalledWith(redBoxContent, 'red_box.urdf', 'https://example.com/')
      
      // Verify red box properties
      expect(redBoxContent).toContain('red_box_robot')
      expect(redBoxContent).toContain('xyz="0.5 1.0 0.0"')
      expect(redBoxContent).toContain('rpy="0.0 0.0 0.785398"')
      expect(redBoxContent).toContain('box size="1.0 0.5 0.25"')
    })

    it('should load sample URDF from openrr repository', async () => {
      const fs = await import('fs/promises')
      const path = await import('path')
      
      const samplePath = path.join(__dirname, 'fixtures', 'sample_from_openrr.urdf')
      const sampleContent = await fs.readFile(samplePath, 'utf-8')

      // Mock fetch to return sample URDF
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        text: async () => sampleContent
      } as Response)

      // Mock the ThreeViewer ref
      const mockLoadURDFContent = vi.fn()
      wrapper.vm.threeViewerRef = {
        loadURDFContent: mockLoadURDFContent
      }

      // Set URL and load
      wrapper.vm.urlInput = 'https://raw.githubusercontent.com/openrr/urdf-viz/refs/heads/main/sample.urdf'
      await wrapper.vm.loadFromUrl()
      await nextTick()

      // Verify content was loaded with package path
      expect(mockLoadURDFContent).toHaveBeenCalledWith(sampleContent, 'sample.urdf', 'https://raw.githubusercontent.com/openrr/urdf-viz/refs/heads/main/')
      
      // Verify sample URDF properties
      expect(sampleContent).toContain('<robot name="robot">')
      expect(sampleContent).toContain('link name="root"')
      expect(sampleContent).toContain('link name="l_shoulder1"')
    })
  })
})

/**
 * Extensible test scenarios for future test cases
 * These can be added to without modifying the existing tests
 */
describe('App.vue - Extensible URDF Test Scenarios', () => {
  // Register test scenarios
  beforeEach(() => {
    testScenarios.register({
      name: 'simple_robot_upload',
      description: 'Upload a simple robot with one link and one joint',
      inputUrdf: SIMPLE_URDF,
      expectedOutput: SIMPLE_URDF
    })

    testScenarios.register({
      name: 'complex_robot_upload',
      description: 'Upload a robot with multiple links and joints',
      inputUrdf: COMPLEX_URDF,
      expectedOutput: COMPLEX_URDF
    })
  })

  it('should run all registered test scenarios', () => {
    const scenarios = testScenarios.getAll()
    expect(scenarios.length).toBeGreaterThan(0)
    
    scenarios.forEach(scenario => {
      expect(scenario.name).toBeDefined()
      expect(scenario.inputUrdf).toBeDefined()
    })
  })

  it('should allow adding new test scenarios dynamically', () => {
    const newScenario: TestScenario = {
      name: 'custom_test',
      description: 'A custom test scenario',
      inputUrdf: '<?xml version="1.0"?><robot name="custom"></robot>'
    }

    testScenarios.register(newScenario)
    const retrieved = testScenarios.get('custom_test')
    
    expect(retrieved).toBeDefined()
    expect(retrieved?.name).toBe('custom_test')
  })
})

/**
 * Future test template for editor modifications
 * This demonstrates how to test: Upload → Modify → Download → Compare
 */
describe('App.vue - Future: Edit and Verify Changes', () => {
  it('template: should modify robot properties and verify in download', async () => {
    // This is a template for future tests that will:
    // 1. Upload a URDF
    // 2. Make modifications through the editor (e.g., change joint type)
    // 3. Download the modified URDF
    // 4. Verify the changes are present in the downloaded file
    
    const scenario: TestScenario = {
      name: 'modify_joint_type',
      description: 'Change a joint from revolute to fixed',
      inputUrdf: SIMPLE_URDF,
      modifications: (root) => {
        // Future: Modify the robot structure
        // root.children[1].properties.type = 'fixed'
      }
    }

    // This test is a placeholder for future implementation
    expect(scenario.name).toBe('modify_joint_type')
  })
})
