import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment } from '@react-three/drei'

function F1CarModel({ color = "#FF8700" }) {
  const group = useRef()
  
  // Wiggle effect for speed
  useFrame((state) => {
    group.current.position.x = Math.sin(state.clock.elapsedTime * 20) * 0.03
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 15) * 0.03
  })

  return (
    <group ref={group} scale={0.7} rotation={[0, 0, 0]}>
      {/* Main Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[0.3, 0.25, 2.0]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Nose */}
      <mesh position={[0, -0.05, 1.3]} castShadow>
        <boxGeometry args={[0.15, 0.1, 0.6]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Front Wing */}
      <mesh position={[0, -0.1, 1.5]} castShadow>
        <boxGeometry args={[1.0, 0.05, 0.3]} />
        <meshStandardMaterial color="#111111" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Rear Wing */}
      <mesh position={[0, 0.3, -0.9]} castShadow>
        <boxGeometry args={[0.9, 0.05, 0.3]} />
        <meshStandardMaterial color="#111111" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[-0.2, 0.15, -0.9]} castShadow>
        <boxGeometry args={[0.05, 0.3, 0.2]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      <mesh position={[0.2, 0.15, -0.9]} castShadow>
        <boxGeometry args={[0.05, 0.3, 0.2]} />
        <meshStandardMaterial color="#111" />
      </mesh>

      {/* Sidepods */}
      <mesh position={[-0.3, 0, -0.2]} castShadow>
        <boxGeometry args={[0.3, 0.2, 0.8]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.3, 0, -0.2]} castShadow>
        <boxGeometry args={[0.3, 0.2, 0.8]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Cockpit */}
      <mesh position={[0, 0.15, 0.1]} castShadow>
        <boxGeometry args={[0.2, 0.15, 0.4]} />
        <meshStandardMaterial color="#000" metalness={1} roughness={0} />
      </mesh>

      {/* Wheels */}
      {/* Front Left */}
      <mesh position={[-0.45, 0, 0.9]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.15, 32]} />
        <meshStandardMaterial color="#111" roughness={0.9} />
      </mesh>
      {/* Front Right */}
      <mesh position={[0.45, 0, 0.9]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.15, 32]} />
        <meshStandardMaterial color="#111" roughness={0.9} />
      </mesh>
      {/* Rear Left */}
      <mesh position={[-0.45, 0.05, -0.8]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.25, 0.25, 0.2, 32]} />
        <meshStandardMaterial color="#111" roughness={0.9} />
      </mesh>
      {/* Rear Right */}
      <mesh position={[0.45, 0.05, -0.8]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.25, 0.25, 0.2, 32]} />
        <meshStandardMaterial color="#111" roughness={0.9} />
      </mesh>
      
      {/* Neon Underglow */}
      <pointLight position={[0, -0.2, 0]} intensity={10} color="#FFAA00" distance={3} />
    </group>
  )
}

export default function F1Car() {
  return (
    <div style={{ width: '120px', height: '120px', position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }}>
      <Canvas shadows transparent>
        <PerspectiveCamera makeDefault position={[0, 4, 3]} fov={40} rotation={[-0.9, 0, 0]} />
        <ambientLight intensity={1.0} />
        <directionalLight position={[5, 10, -2]} intensity={2} castShadow />
        <Environment preset="city" />
        <F1CarModel />
      </Canvas>
    </div>
  )
}
