//@ts-nocheck
"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 200 }) => {
  const mesh = useRef(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          Math.random() * 10 + 5,
          (Math.random() - 0.5) * 10,
        ],
        speed: 0.003 + Math.random() * 0.002,
        driftX: (Math.random() - 0.5) * 0.002,
        driftZ: (Math.random() - 0.5) * 0.002,
        phase: Math.random() * Math.PI * 2, // for flicker
      });
    }
    return temp;
  }, [count]);

  useFrame(({ clock }) => {
    const positions = mesh.current.geometry.attributes.position.array;
    const time = clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      let x = positions[i * 3];
      let y = positions[i * 3 + 1];
      let z = positions[i * 3 + 2];

      const p = particles[i];

      // downward movement
      y -= p.speed;

      // horizontal floating
      x += p.driftX + Math.sin(time + p.phase) * 0.001;
      z += p.driftZ + Math.cos(time + p.phase) * 0.001;

      // reset when out of view
      if (y < -2) {
        y = Math.random() * 10 + 5;
        x = (Math.random() - 0.5) * 10;
        z = (Math.random() - 0.5) * 10;
      }

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  const positions = new Float32Array(count * 3);
  particles.forEach((p, i) => {
    positions[i * 3] = p.position[0];
    positions[i * 3 + 1] = p.position[1];
    positions[i * 3 + 2] = p.position[2];
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#ffffff"
        size={0.06}
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
