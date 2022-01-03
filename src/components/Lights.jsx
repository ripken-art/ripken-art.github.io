
import Bulb from './Bulb';
import { Suspense } from "react";

const Lights = ({}) => {
    return(
        <Suspense fallback={null}>
            <ambientLight intensity={ 0.2 }/>
            <directionalLight 
            shadow-mapSize-height={2**10}
            shadow-mapSize-width={2**10}
            shadow-radius={10}
            position={[6,3,0]}
            intensity={0.5}
            castShadow
            />        
            <Bulb position={[0,3,0]} />
        </Suspense>
        
    )
}

export default Lights