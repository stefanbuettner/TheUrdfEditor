/**
 * Base class for URDF Editor test scenarios
 * Provides common utilities for upload/download testing
 */
export interface TestScenario {
  name: string
  description: string
  inputUrdf: string
  expectedOutput?: string
  modifications?: (root: any) => void
}

/**
 * Helper function to create a File object from URDF content
 */
export function createUrdfFile(content: string, filename = 'test.urdf'): File {
  const blob = new Blob([content], { type: 'application/xml' })
  return new File([blob], filename, { type: 'application/xml' })
}

/**
 * Helper function to read file content
 */
export async function readFileContent(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => resolve(e.target?.result as string)
    reader.onerror = reject
    reader.readAsText(file)
  })
}

/**
 * Helper function to normalize XML for comparison
 * Removes extra whitespace and normalizes formatting
 */
export function normalizeXml(xml: string): string {
  return xml
    .replace(/>\s+</g, '><')  // Remove whitespace between tags
    .replace(/\s+/g, ' ')      // Normalize internal whitespace
    .trim()
}

/**
 * Helper function to compare two XML strings
 */
export function compareXml(actual: string, expected: string): boolean {
  return normalizeXml(actual) === normalizeXml(expected)
}

/**
 * Test scenario registry for extensibility
 */
export class URDFTestScenarios {
  private scenarios: Map<string, TestScenario> = new Map()

  register(scenario: TestScenario) {
    this.scenarios.set(scenario.name, scenario)
  }

  get(name: string): TestScenario | undefined {
    return this.scenarios.get(name)
  }

  getAll(): TestScenario[] {
    return Array.from(this.scenarios.values())
  }
}

// Global test scenarios registry
export const testScenarios = new URDFTestScenarios()
