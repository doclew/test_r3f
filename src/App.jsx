/* eslint-disable react/no-unknown-property */
import "./App.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
//import * as THREE from "three";

import TestScene from "./TestScene";

import BorsaUI from "./components/BorsaUI";
import Loading from "./components/Loading";

function App() {
  return (
    <>
      <BorsaUI />
      <Suspense fallback={<Loading />}>
        <Canvas
          shadows
          gl={{ antialias: true, /* toneMapping: THREE.NoToneMapping */ }}
          linear
        >
          <PerspectiveCamera makeDefault position={[0, 0, 1.5]} />
          <ambientLight intensity={1} />
          <TestScene />
        </Canvas>
      </Suspense>
    </>
  );
}

export default App;
