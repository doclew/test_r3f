import "./App.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import TestScene from "./TestScene";

import BorsaUI from "./components/BorsaUI";

function App() {
  return (
    <>
      <BorsaUI />
      <Canvas shadows camera={{ position: [0, 0, 1.2], fov: 60 }}>
        <Suspense fallback={null}>
          <TestScene />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
