/* eslint-disable react/no-unknown-property */
import { OrbitControls, Environment } from "@react-three/drei";
import Fract from "./components/Fract";

export default function TestScene() {
  return (
    <>
      <Environment files="/background.hdr" /* background */ blur={0} />
      <OrbitControls minDistance={0.7} maxDistance={3} />
      <Fract />
    </>
  );
}
