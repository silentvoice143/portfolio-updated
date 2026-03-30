"use client";

import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  // Path starts from the 'public' folder
  const { scene } = useGLTF("/luffy/scene.gltf");
  return <primitive object={scene} scale={1} />;
}

export default function ModelViewer() {
  return (
    <div className="h-[500px] w-full bg-zinc-900 rounded-xl overflow-hidden">
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

        <Suspense fallback={null}>
          <Model />
          {/* Environment adds realistic reflections from a "city" map */}
          <Environment preset="city" />
          {/* Adds a soft shadow on the "floor" */}
          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={4.5}
          />
        </Suspense>

        <OrbitControls enablePan={false} minDistance={2} maxDistance={10} />
      </Canvas>
    </div>
  );
}
