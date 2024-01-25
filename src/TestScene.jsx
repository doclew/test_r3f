/* eslint-disable react/no-unknown-property */
import { OrbitControls, Environment } from "@react-three/drei";
import Fract from "./components/Fract";

export default function TestScene() {
  return (
    <>
      <Environment files="/background.hdr" background blur={0.4} />

      <directionalLight
        position={[-5, 5, 5]}
        castShadow
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <OrbitControls minDistance={0.7} maxDistance={3} />
      <Fract />
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -0, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10, 1, 1]} />
        <meshStandardMaterial attach="material" color="red" side={2} />

        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
}
