// Test setup file
import { vi } from 'vitest'

// Mock URL.createObjectURL and URL.revokeObjectURL for download tests
(global as any).URL.createObjectURL = vi.fn(() => 'mock-url');
(global as any).URL.revokeObjectURL = vi.fn()

// Mock FileReader for upload tests
class MockFileReader {
  result: string | ArrayBuffer | null = null
  onload: ((event: ProgressEvent<FileReader>) => void) | null = null
  onerror: ((event: ProgressEvent<FileReader>) => void) | null = null
  
  readAsText(blob: Blob) {
    blob.text().then((text) => {
      this.result = text
      if (this.onload) {
        this.onload({ target: this } as any)
      }
    })
  }
}

(global as any).FileReader = MockFileReader
