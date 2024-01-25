/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */


import  { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Borsa.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Tessuto.geometry} material={nodes.Tessuto.material} />
      <mesh geometry={nodes.Metal.geometry} material={nodes.Metal.material} />
      <mesh geometry={nodes.Impunture.geometry} material={nodes.Impunture.material} />
    </group>
  )
}

useGLTF.preload('/Borsa.gltf')
