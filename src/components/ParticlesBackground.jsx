// ParticlesBackground.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";

// Professional "Galaxy Blue-Black" Palette
const COLORS = [
  "#00aaff", // bright blue accent
  "#66ccff", // softer blue
  "#a0c4ff", // subtle light blue
  "#ffffff", // occasional white highlight
  "#475569"  // muted gray-blue for depth
]; 

function ProfessionalShape({ position, color, scale, speed, shapeType }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime() * speed;
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
      meshRef.current.position.y += Math.sin(t) * 0.015;
      meshRef.current.position.x += Math.cos(t) * 0.01;
    }
  });

  const getGeometry = () => {
    switch (shapeType) {
      case "cube": return <boxGeometry args={[1.5, 1.5, 1.5]} />;
      case "sphere": return <sphereGeometry args={[1.2, 32, 32]} />;
      case "capsule": return <capsuleGeometry args={[0.7, 1.8, 4, 12]} />;
      case "icosahedron": return <icosahedronGeometry args={[1.3, 0]} />;
      default: return <boxGeometry args={[1.5, 1.5, 1.5]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {getGeometry()}
      <MeshDistortMaterial 
        color={color}
        speed={0.8} 
        distort={0.15} 
        radius={1} 
        metalness={0.9} 
        roughness={0.2}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

function FloatingSystem({ count = 40 }) {
  const shapes = useMemo(() => {
    const types = ["cube", "sphere", "capsule", "icosahedron"];
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 60, 
        (Math.random() - 0.5) * 40, 
        (Math.random() - 0.5) * 40
      ],
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      scale: Math.random() * 0.9 + 0.5,
      speed: Math.random() * 0.5 + 0.2,
      shapeType: types[Math.floor(Math.random() * types.length)],
    }));
  }, [count]);

  return shapes.map((props, i) => <ProfessionalShape key={i} {...props} />);
}

export default function ParticlesBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 30], fov: 60 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "#020617"
      }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#00aaff" />
      <spotLight position={[-10, -10, 10]} intensity={0.8} color="#66ccff" />

      <Stars radius={100} depth={50} count={500} factor={4} saturation={0} fade speed={1} />

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
        <FloatingSystem count={45} />
      </Float>

      <fog attach="fog" args={["#020617", 10, 80]} />
    </Canvas>
  );
}