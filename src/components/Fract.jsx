/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { TextureLoader, MeshStandardMaterial } from "three";
import { useSelector } from "react-redux";

export default function Borsa(props) {
  const group = useRef();
  const { nodes } = useGLTF("/Borsa.gltf");

  const baseTexture = useSelector((state) => {
    return state.baseColor.baseTexture;
  });

  const impColor = useSelector((state) => {
    return state.impuntureCol.impColor;
  });

  if (!baseTexture && !impColor) {
    return null;
  }
 
  const colorTexture = new TextureLoader().load("/ripetute/COLOR.jpg");
  const normalTexture = new TextureLoader().load("/ripetute/NRM.jpg");
  const roughnessTexture = new TextureLoader().load("/ripetute/ROUGH.jpg");
  const specularTexture = new TextureLoader().load("/ripetute/SPEC.jpg");

  // Tessuto mat
  nodes.Tessuto.material.map = colorTexture;

  nodes.Tessuto.material.normalMap = normalTexture;
  nodes.Tessuto.material.roughnessMap = roughnessTexture;
  nodes.Tessuto.material.metalnessMap = specularTexture;

  // Metal mat
  nodes.Metal.material = new MeshStandardMaterial({
    color: 0xb7b3b3,
    normalMap: normalTexture,
    roughness: 0.1,
    metalness: 0.7,
  });

  // Imp mat
  nodes.Impunture.material = new MeshStandardMaterial({
    color: impColor,
    normalMap: normalTexture,
    roughness: 0.8,
  });

  useEffect(() => {
    if (!baseTexture) return;

    const colorTexture = new TextureLoader().load(baseTexture);

    nodes.Tessuto.material.map = colorTexture;
  }, [baseTexture, nodes.Tessuto.material]);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Tessuto */}
      <mesh
        geometry={nodes.Tessuto.geometry}
        material={nodes.Tessuto.material}
        scale={[2, 2, 2]}
        position={[0, -0.5, 0]}
      />

      {/* Metallo */}
      <mesh
        geometry={nodes.Metal.geometry}
        material={nodes.Metal.material}
        scale={[2, 2, 2]}
        position={[0, -0.5, 0]}
      />

      {/* Impunture */}
      <mesh
        geometry={nodes.Impunture.geometry}
        material={nodes.Impunture.material}
        scale={[2, 2, 2]}
        position={[0, -0.5, 0]}
      />
    </group>
  );
}

useGLTF.preload("/Borsa.gltf");
