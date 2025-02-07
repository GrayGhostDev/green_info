import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Float, Text3D } from '@react-three/drei'
import * as THREE from 'three'
import { Group } from 'three'

function MicrophoneModel() {
  const group = useRef<Group>(null)
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3
    }
  })

  return (
    <group ref={group}>
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.2, 0.5, 32]} />
        <meshStandardMaterial color="#666666" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0.4, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#444444" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 16]} />
        <meshStandardMaterial color="#888888" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  )
}

interface FloatingTextProps {
  text: string
  position: [number, number, number]
  color: string
}

function FloatingText({ text, position, color }: FloatingTextProps) {
  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      position={position}
    >
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.1}
        curveSegments={12}
      >
        {text}
        <meshStandardMaterial color={color} />
      </Text3D>
    </Float>
  )
}

export default function PodcastScene() {
  return (
    <div className="h-[50vh] w-full">
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} />
        
        <MicrophoneModel />
        
        <FloatingText
          text="Green Info"
          position={[-2, 1, 0]}
          color="#00A651"
        />
        
        <FloatingText
          text="Urban Style"
          position={[2, 1, 0]}
          color="#FFA500"
        />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  )
} 