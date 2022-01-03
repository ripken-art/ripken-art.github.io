import * as THREE from 'three';
import {
    useLoader
  } from '@react-three/fiber';
import { useMemo } from 'react';

const Background = props => {
    const texture = useLoader(
      THREE.TextureLoader, 
      'sky.jpg'
    );
  
    //const { gl } = useThree();
    // const formatted = useMemo(() => {
      // const formatted = new THREE.WebGLCubeRenderTarget(
      //   texture.image.height
      // ).fromEquirectangularTexture(gl, texture)
    // }, [])
  
  
    return(
      <primitive 
        attach='background' 
        object={texture}
      />
    )
  }

  export default Background;