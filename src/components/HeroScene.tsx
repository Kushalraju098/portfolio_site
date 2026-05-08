import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

const Blob = () => {
  const ref = useRef<Mesh>(null);
  useFrame(({ clock, mouse }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.15;
    ref.current.rotation.x = mouse.y * 0.3;
    ref.current.position.x = mouse.x * 0.2;
  });
  return (
    <Sphere ref={ref} args={[1.4, 128, 128]}>
      <MeshDistortMaterial
        color="#f5b342"
        distort={0.45}
        speed={1.6}
        roughness={0.1}
        metalness={0.6}
      />
    </Sphere>
  );
};

const HeroScene = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#fff3d9" />
        <directionalLight position={[-5, -3, -2]} intensity={0.6} color="#ff6b35" />
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
          <Blob />
        </Float>
        <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
          <Torus args={[0.35, 0.07, 16, 80]} position={[1.8, 1.1, 0]}>
            <meshStandardMaterial color="#f5b342" metalness={0.8} roughness={0.2} />
          </Torus>
        </Float>
        <Float speed={1.2} rotationIntensity={1} floatIntensity={1.2}>
          <Icosahedron args={[0.3, 0]} position={[-1.9, -1, 0.5]}>
            <meshStandardMaterial color="#ffffff" wireframe />
          </Icosahedron>
        </Float>
      </Suspense>
    </Canvas>
  );
};

export default HeroScene;
