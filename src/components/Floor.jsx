import { useBox } from '@react-three/cannon';

const Floor = props =>{
  const [ref, api] = useBox(() => ({
    args: [200,10,200], 
    ...props
  }));
  
    return(
      <mesh 
      ref = {ref}
        {...props} 
        receiveShadow
      >
        <boxBufferGeometry args={[200,10,200]}/>
        <meshPhysicalMaterial />
      </mesh>
    )
  }

  export default Floor;