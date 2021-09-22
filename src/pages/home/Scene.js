import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../../../scene.gltf')
  return (
    <group className="container" ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Earth_Ground_Earth_Ground_0.geometry} material={materials.Earth_Ground} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Earth_Water_Earth_Water_0.geometry} material={materials.Earth_Water} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../../../scene.gltf')
