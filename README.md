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

## Deployment

The application is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow is configured in `.github/workflows/deploy.yml`.

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

