import { useMemo } from 'react';
import * as THREE from 'three';

export function useEarthMaterials() {
  const materials = useMemo(() => {
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'),
      bumpMap: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg'),
      bumpScale: 0.05,
      specularMap: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'),
      specular: new THREE.Color('#2196f3'),
      shininess: 15,
    });

    const cloudsMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'),
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
    });

    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: '#2196f3',
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide,
    });

    return { earthMaterial, cloudsMaterial, atmosphereMaterial };
  }, []);

  return materials;
}