//@ts-nocheck
"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 200 }) => {
  const mesh = useRef(null);

  // 1. Memoize the particle metadata
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        speed: 0.003 + Math.random() * 0.002,
        driftX: (Math.random() - 0.5) * 0.002,
        driftZ: (Math.random() - 0.5) * 0.002,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return temp;
  }, [count]);

  // 2. Memoize the Float32Array so it's only created ONCE
  const initialPositions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = Math.random() * 10 + 5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;

    // Access the existing attribute instead of creating a new one
    const attr = mesh.current.geometry.attributes.position;
    const positions = attr.array;
    const time = clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const p = particles[i];
      let x = positions[i * 3];
      let y = positions[i * 3 + 1];
      let z = positions[i * 3 + 2];

      y -= p.speed;
      x += p.driftX + Math.sin(time + p.phase) * 0.001;
      z += p.driftZ + Math.cos(time + p.phase) * 0.001;

      if (y < -2) {
        y = Math.random() * 10 + 5;
        x = (Math.random() - 0.5) * 10;
        z = (Math.random() - 0.5) * 10;
      }

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    attr.needsUpdate = true; // Tell Three.js to send only the data changes to GPU
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={initialPositions}
          itemSize={3}
          usage={THREE.DynamicDrawUsage} // 🔥 Optimization: Tells GPU this data changes often
        />
      </bufferGeometry>

      <pointsMaterial
        color="#ffffff"
        size={0.06}
        transparent
        opacity={0.8}
        depthWrite={false}
        blending={THREE.AdditiveBlending} // Optional: makes them look "glowy"
      />
    </points>
  );
};

export default Particles;
