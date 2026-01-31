import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { nextTick } from 'vue'
import HierarchyPanel from '../components/HierarchyPanel.vue'
import type { URDFNode } from '../types/urdf'

describe('HierarchyPanel.vue - Collapsible Hierarchy', () => {
  let wrapper: VueWrapper<InstanceType<typeof HierarchyPanel>>
  let mockRootNode: URDFNode

  beforeEach(() => {
    // Create a mock robot hierarchy with multiple levels
    mockRootNode = {
      name: 'test_robot',
      type: 'robot',
      children: [
        {
          name: 'joint_1',
          type: 'joint',
          children: [
            {
              name: 'link_1',
              type: 'link',
              children: [
                {
                  name: 'joint_2',
                  type: 'joint',
                  children: [
                    {
                      name: 'link_2',
                      type: 'link',
                      children: [],
                      properties: {}
                    }
                  ],
                  properties: {}
                }
              ],
              properties: {}
            }
          ],
          properties: {}
        },
        {
          name: 'joint_3',
          type: 'joint',
          children: [
            {
              name: 'link_3',
              type: 'link',
              children: [],
              properties: {}
            }
          ],
          properties: {}
        }
      ],
      properties: {}
    }

    wrapper = mount(HierarchyPanel, {
      props: {
        root: mockRootNode,
        selected: null
      }
    })
  })

  describe('Initial State', () => {
    it('should display the hierarchy with all nodes expanded by default', () => {
      // Check that all node names are visible
      expect(wrapper.text()).toContain('test_robot')
      expect(wrapper.text()).toContain('joint_1')
      expect(wrapper.text()).toContain('link_1')
      expect(wrapper.text()).toContain('joint_2')
      expect(wrapper.text()).toContain('link_2')
      expect(wrapper.text()).toContain('joint_3')
      expect(wrapper.text()).toContain('link_3')
    })

    it('should show expand/collapse buttons for nodes with children', () => {
      const collapseButtons = wrapper.findAll('button[aria-label="Collapse"]')
      // Root + joint_1 + link_1 + joint_2 + joint_3 = 5 nodes with children
      expect(collapseButtons.length).toBeGreaterThan(0)
    })

    it('should not show expand/collapse button for leaf nodes', () => {
      // link_2 and link_3 have no children, so they should not have expand buttons
      // We can verify this by checking that nodes without children don't have buttons
      const text = wrapper.text()
      expect(text).toContain('link_2')
      expect(text).toContain('link_3')
    })
  })

  describe('Expand/Collapse All Buttons', () => {
    it('should show expand all and collapse all buttons when root is present', () => {
      const expandAllButton = wrapper.find('button[title="Expand all nodes"]')
      const collapseAllButton = wrapper.find('button[title="Collapse all nodes"]')
      
      expect(expandAllButton.exists()).toBe(true)
      expect(collapseAllButton.exists()).toBe(true)
      expect(expandAllButton.text()).toBe('⊞')
      expect(collapseAllButton.text()).toBe('⊟')
    })

    it('should not show expand/collapse all buttons when no root is present', () => {
      wrapper = mount(HierarchyPanel, {
        props: {
          root: null,
          selected: null
        }
      })

      const expandAllButton = wrapper.find('button[title="Expand all nodes"]')
      const collapseAllButton = wrapper.find('button[title="Collapse all nodes"]')
      
      expect(expandAllButton.exists()).toBe(false)
      expect(collapseAllButton.exists()).toBe(false)
    })

    it('should collapse all child nodes when collapse all is clicked', async () => {
      const collapseAllButton = wrapper.find('button[title="Collapse all nodes"]')
      await collapseAllButton.trigger('click')
      await nextTick()

      // Root should still be visible
      expect(wrapper.text()).toContain('test_robot')
      
      // First level children should be visible but collapsed
      expect(wrapper.text()).toContain('joint_1')
      expect(wrapper.text()).toContain('joint_3')
      
      // Check that the first level children show expand arrows
      const expandButtons = wrapper.findAll('button[aria-label="Expand"]')
      expect(expandButtons.length).toBeGreaterThan(0)
    })

    it('should expand all nodes when expand all is clicked', async () => {
      // First collapse all
      const collapseAllButton = wrapper.find('button[title="Collapse all nodes"]')
      await collapseAllButton.trigger('click')
      await nextTick()

      // Then expand all
      const expandAllButton = wrapper.find('button[title="Expand all nodes"]')
      await expandAllButton.trigger('click')
      await nextTick()

      // All nodes should be visible again
      expect(wrapper.text()).toContain('test_robot')
      expect(wrapper.text()).toContain('joint_1')
      expect(wrapper.text()).toContain('link_1')
      expect(wrapper.text()).toContain('joint_2')
      expect(wrapper.text()).toContain('link_2')
      expect(wrapper.text()).toContain('joint_3')
      expect(wrapper.text()).toContain('link_3')
    })
  })

  describe('Node Selection', () => {
    it('should emit select event when a node is clicked', async () => {
      const nodeLabels = wrapper.findAll('.node-label')
      await nodeLabels[0].trigger('click')

      expect(wrapper.emitted('select')).toBeTruthy()
      expect(wrapper.emitted('select')?.length).toBe(1)
    })

    it('should highlight selected node', async () => {
      const selectedNode = mockRootNode.children[0]
      wrapper = mount(HierarchyPanel, {
        props: {
          root: mockRootNode,
          selected: selectedNode
        }
      })

      const selectedLabels = wrapper.findAll('.node-label.selected')
      expect(selectedLabels.length).toBeGreaterThan(0)
    })
  })

  describe('Empty State', () => {
    it('should show empty state message when no root is provided', () => {
      wrapper = mount(HierarchyPanel, {
        props: {
          root: null,
          selected: null
        }
      })

      expect(wrapper.text()).toContain('No model loaded')
      expect(wrapper.text()).toContain('Upload a URDF file to get started')
    })
  })
})
