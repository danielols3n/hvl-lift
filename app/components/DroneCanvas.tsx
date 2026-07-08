import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function DroneModel({
  src,
  progress,
  dynamic,
}: {
  src: string;
  progress: number;
  dynamic: boolean;
}) {
  const { scene } = useGLTF(src, true); // true = draco-compressed
  const group = useRef<THREE.Group>(null);
  const p = useRef(progress);
  p.current = progress;

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;

    if (dynamic) {
      // Continuous spin + gentle float + tilt toward the cursor = alive
      g.rotation.y += delta * 0.45;
      g.position.y = Math.sin(state.clock.elapsedTime * 1.1) * 0.08;
      const targetX = -0.12 - state.pointer.y * 0.35;
      const targetZ = state.pointer.x * 0.22;
      g.rotation.x += (targetX - g.rotation.x) * 0.05;
      g.rotation.z += (targetZ - g.rotation.z) * 0.05;
    } else {
      // Scroll-driven turntable + lift (take-off)
      const targetY = p.current * Math.PI * 2;
      g.rotation.y += (targetY - g.rotation.y) * 0.12;
      g.position.y = 0.1 + p.current * 0.7;
      g.rotation.x = -0.12 - p.current * 0.12;
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

export function DroneCanvas({
  src,
  progress = 0,
  dynamic = false,
  className = "",
}: {
  src: string;
  progress?: number;
  dynamic?: boolean;
  className?: string;
}) {
  return (
    <Canvas
      className={className}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0.6, 4.4], fov: 35 }}
    >
      {/* Light: bright, soft, with a cyan rim for the sci-fi look */}
      <ambientLight intensity={0.7} />
      <hemisphereLight args={["#dbeafe", "#1e293b", 1.3]} />
      <directionalLight position={[5, 8, 5]} intensity={3.2} color="#ffffff" />
      <directionalLight position={[-5, 3, -4]} intensity={1.6} color="#22d3ee" />
      <directionalLight position={[3, -2, 4]} intensity={0.7} color="#ffffff" />

      <Suspense fallback={null}>
        <DroneModel src={src} progress={progress} dynamic={dynamic} />
        {/* Soft ground shadow */}
        <ContactShadows
          position={[0, -1.05, 0]}
          opacity={0.5}
          scale={9}
          blur={2.6}
          far={4}
          resolution={1024}
          color="#000000"
        />
      </Suspense>
    </Canvas>
  );
}

// Preload so the model starts fetching as soon as the module loads
useGLTF.preload("/drone/drone.glb", true);
