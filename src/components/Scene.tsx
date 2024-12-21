import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import { Earth } from './Earth';
import { Particles } from './Particles';

export function Scene() {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade
        speed={1}
      />
      <Particles />
      <Earth />
      <OrbitControls
        enableZoom={true}
        zoomSpeed={0.5}
        minDistance={4}
        maxDistance={12}
        enablePan={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.5}
        rotateSpeed={0.5}
      />
    </Canvas>
  );
}