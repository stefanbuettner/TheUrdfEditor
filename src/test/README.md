# URDF Editor Test Suite

This directory contains comprehensive tests for the URDF Editor application.

## Test Structure

### Test Files

- **`App.spec.ts`** - Main test file for the App component
  - Tests initial state (no URDF loaded, download button disabled)
  - Tests URDF upload functionality
  - Tests URDF download functionality
  - Tests round-trip (upload → download) consistency
  - Extensible test scenarios for future use cases

- **`test-utils.ts`** - Reusable test utilities and helpers
  - File creation helpers (`createUrdfFile`)
  - XML normalization and comparison (`normalizeXml`, `compareXml`)
  - Test scenario registry for extensibility (`URDFTestScenarios`)

- **`setup.ts`** - Test environment setup
  - Mocks for browser APIs (FileReader, URL.createObjectURL, etc.)

### Test Fixtures

The `fixtures/` directory contains sample URDF files for testing:
- `simple_robot.urdf` - Basic robot with one link and one joint
- `complex_robot.urdf` - More complex robot with multiple links and joints

## Running Tests

```bash
# Run tests in watch mode (interactive)
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui
```

## Test Coverage

The current test suite covers:

1. **Initial State**
   - ✅ Editor starts without any loaded URDF
   - ✅ Download button is disabled initially
   - ✅ Hierarchy panel shows "No model loaded" message

2. **URDF Upload**
   - ✅ File input accepts URDF files (.urdf, .xml)
   - ✅ Upload handler processes files correctly
   - ✅ Download button becomes enabled after upload

3. **URDF Download**
   - ✅ Generates correct URDF XML from internal structure
   - ✅ Downloads file with correct filename
   - ✅ Does not download when no URDF is loaded

4. **Round-trip Testing**
   - ✅ Downloaded URDF matches uploaded URDF structure
   - ✅ XML comparison handles whitespace differences

## Extensibility

The test suite is designed to be easily extensible for future test cases:

### Adding New Test Scenarios

You can register new test scenarios using the `URDFTestScenarios` registry:

```typescript
import { testScenarios } from './test-utils'

testScenarios.register({
  name: 'my_custom_test',
  description: 'Test a specific URDF feature',
  inputUrdf: '<?xml version="1.0"?>...',
  expectedOutput: '<?xml version="1.0"?>...',
  modifications: (root) => {
    // Optional: Define modifications to apply before download
    root.children[0].properties.someValue = 'newValue'
  }
})
```

### Future Test Templates

The test suite includes templates for future functionality:

1. **Editor Modifications** - Upload → Modify → Download → Compare
   - Template provided in `App.spec.ts`
   - Ready for implementation when editor features are added

2. **Complex Robot Structures** - Test multi-level hierarchies
   - Fixtures provided in `fixtures/complex_robot.urdf`
   - Scenarios registered for easy activation

## Test Philosophy

These tests follow best practices:

- **Isolated** - Each test is independent and doesn't affect others
- **Focused** - Tests verify specific functionality
- **Maintainable** - Reusable utilities reduce duplication
- **Extensible** - Easy to add new test cases
- **Documented** - Clear descriptions of what each test verifies

## Adding More Tests

When adding new tests:

1. Create test fixtures in `fixtures/` if needed
2. Add reusable helpers to `test-utils.ts`
3. Register scenarios in the `URDFTestScenarios` registry
4. Write focused test cases in `App.spec.ts` or new spec files
5. Ensure tests are isolated and don't depend on execution order

## Continuous Integration

Tests are automatically run:
- On every commit (pre-commit hook - if configured)
- In pull requests (CI/CD pipeline)
- Before deployments

All tests must pass before code can be merged.
