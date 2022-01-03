import { Suspense } from "react";
import BoundingBox from "./BoundingBox";
import Model from "./Model";
import {useMemo} from 'react';

const Assets = ({ }) => {
   return(  
    <Suspense fallback={null}>
        <Model 
            path = '/spongebobs_pineapple_house/scene.gltf'
            scale = {new Array(3).fill(0.005)}
            position={[ 3, 0, -10 ]}
        />   
        <Model 
            path= '/squidwards_house/scene.gltf'
            scale={new Array(3).fill(0.015)}
            position={[ -10, -0.001, -15 ]}
            rotation={[ 0, -1.5, 0 ]}
        />
    </Suspense>         
   )    
}


export default Assets
