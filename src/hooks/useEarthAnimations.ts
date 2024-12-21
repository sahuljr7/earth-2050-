import { RefObject } from 'react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';

export const useEarthAnimations = (earthRef: RefObject<THREE.Mesh>) => {
  const { camera } = useThree();

  const handleZoom = (event: WheelEvent) => {
    event.preventDefault();
    const zoomSpeed = 0.5;
    const minDistance = 4;
    const maxDistance = 12;
    
    const newZ = camera.position.z + (event.deltaY * 0.01 * zoomSpeed);
    const clampedZ = Math.max(minDistance, Math.min(maxDistance, newZ));

    gsap.to(camera.position, {
      z: clampedZ,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  return { handleZoom };
};