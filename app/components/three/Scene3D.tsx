"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

// Floating Shape Component
function FloatingShape({
  position,
  color,
  scale = 1,
  speed = 1,
  shape = "icosahedron",
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
  shape?: "icosahedron" | "torus" | "octahedron" | "sphere";
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  const geometry = useMemo(() => {
    switch (shape) {
      case "torus":
        return new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
      case "octahedron":
        return new THREE.OctahedronGeometry(1, 0);
      case "sphere":
        return new THREE.SphereGeometry(1, 32, 32);
      default:
        return new THREE.IcosahedronGeometry(1, 0);
    }
  }, [shape]);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.x = time * 0.3 * speed;
      meshRef.current.rotation.y = time * 0.2 * speed;
      meshRef.current.position.y = initialY + Math.sin(time * speed) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale} geometry={geometry}>
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.8}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

// Particle Network
function ParticleNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particleCount = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime();
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  return (
    <>
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial
          size={0.05}
          color="#64ffda"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
    </>
  );
}

// Main 3D Scene
export function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#64ffda" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bd34fe" />
        <pointLight position={[0, 10, -5]} intensity={0.5} color="#3b82f6" />

        {/* Central Shield Shape */}
        <FloatingShape
          position={[0, 0, 0]}
          color="#64ffda"
          scale={1.5}
          speed={0.8}
          shape="icosahedron"
        />

        {/* Orbiting Security Layers */}
        <FloatingShape
          position={[3, 2, -2]}
          color="#ff6b6b"
          scale={0.8}
          speed={1.2}
          shape="octahedron"
        />
        <FloatingShape
          position={[-3, -1, -3]}
          color="#3b82f6"
          scale={0.9}
          speed={1}
          shape="torus"
        />
        <FloatingShape
          position={[2, -2, 2]}
          color="#bd34fe"
          scale={0.7}
          speed={1.5}
          shape="sphere"
        />
        <FloatingShape
          position={[-2, 3, 1]}
          color="#64ffda"
          scale={0.6}
          speed={1.3}
          shape="icosahedron"
        />

        {/* Particle Network */}
        <ParticleNetwork />

        {/* Stars Background */}
        <Stars
          radius={50}
          depth={50}
          count={1000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
