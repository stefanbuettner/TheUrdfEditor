# The URDF Editor

A web-based editor for URDF (Unified Robot Description Format) files, built with Vue 3, TypeScript, and Three.js.

## Features

- 🎨 **3D Visualization**: Interactive 3D view of robot models using Three.js
- 📁 **File Management**: Upload and download URDF files
- 🗂️ **Hierarchy View**: Tree-based visualization of robot components
- 📝 **Properties Panel**: View and inspect component properties
- 🌐 **GitHub Pages**: Hosted directly from GitHub

## Project Structure

```
src/
├── App.vue                    # Main application layout
├── components/
│   ├── HierarchyPanel.vue    # Left sidebar - model hierarchy
│   ├── ThreeViewer.vue       # Center panel - 3D visualization
│   ├── PropertiesPanel.vue   # Right sidebar - component properties
│   └── TreeNode.vue          # Tree node component
├── types/
│   └── urdf.ts               # TypeScript type definitions
└── assets/
    └── main.css              # Global styles
```

## Development

### Prerequisites

- Node.js 20.19.0 or later, or 22.12.0 or later

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Tests

```sh
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui
```

For more information about the test suite, see [src/test/README.md](src/test/README.md).

## Deployment

The application uses an advanced GitHub Pages deployment strategy that supports both production and preview deployments:

### Production Deployment

- **Main branch**: Automatically deployed to the root path at `https://stefanbuettner.github.io/TheUrdfEditor/`
- Triggered on every push to the `main` branch
- Serves as the stable production version

### Branch Preview Deployments

- **All feature branches**: Automatically deployed to dedicated subfolders
- Each branch gets its own preview URL: `https://stefanbuettner.github.io/TheUrdfEditor/branches/{branch-name}/`
- Perfect for reviewing features without building locally
- Check the Actions tab to find the preview URL for your branch in the workflow logs

### Automatic Cleanup

- When a branch is **deleted** or a pull request is **merged**, the corresponding preview deployment is automatically removed
- Keeps the Pages site clean and organized

### Manual Deployment

You can also trigger deployments manually using the GitHub Actions "workflow_dispatch" event from the Actions tab.

### How It Works

1. The `.github/workflows/deploy.yml` workflow builds and deploys all branches
2. Main branch deploys to the root, other branches deploy to `branches/{sanitized-branch-name}/`
3. The `.github/workflows/cleanup.yml` workflow removes branch deployments when branches are deleted or merged
4. The Vite base path is dynamically configured during the build process

## Technologies

- **Vue 3**: Progressive JavaScript framework
- **TypeScript**: Type-safe JavaScript
- **Three.js**: 3D graphics library
- **Vite**: Build tool and development server
- **urdf-loader**: URDF file parsing library

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

