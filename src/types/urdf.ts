export interface URDFNode {
  name: string
  type: 'robot' | 'link' | 'joint' | 'visual' | 'collision' | 'inertial'
  children: URDFNode[]
  properties?: Record<string, any>
  object3D?: any // Three.js Object3D
}
