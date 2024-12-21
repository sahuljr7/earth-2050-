import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useEarthMaterials } from '../hooks/useEarthMaterials';
import { useEarthAnimations } from '../hooks/useEarthAnimations';

export function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const { earthMaterial, cloudsMaterial, atmosphereMaterial } = useEarthMaterials();
  const { handleZoom } = useEarthAnimations(earthRef);

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
      earthRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group>
      {/* Atmosphere glow */}
      <Sphere args={[2.1, 64, 64]}>
        <primitive object={atmosphereMaterial} attach="material" />
      </Sphere>

      {/* Main Earth sphere */}
      <Sphere
        ref={earthRef}
        args={[2, 64, 64]}
        onWheel={handleZoom}
      >
        <primitive object={earthMaterial} attach="material" />
      </Sphere>

      {/* Cloud layer */}
      <Sphere args={[2.01, 64, 64]}>
        <primitive object={cloudsMaterial} attach="material" />
      </Sphere>
    </group>
  );
}