import { Suspense } from "react";
import BoundingBox from "./BoundingBox";
import Model from "./Model";
import Dragable from "./Dragable";

const Cars = ({ }) => {
    return(
      <Suspense fallback={null}>
        <Dragable transformGroup>
          <BoundingBox 
          //visible 
          position={[ 2, 1, 0 ]} 
          dims={[ 1.5,1.7,1 ]}
          offset={[ 0,-0.9,0 ]}
          >
            <Model 
              path='/patrick/scene.gltf'
              scale={new Array(3).fill(1.2)}
              //position={[ 0, -1.7, 0 ]}
            />            
          </BoundingBox>                        
        </Dragable>

        <Dragable transformGroup>
          <BoundingBox 
          //visible 
          position={[ -2, 1, 0 ]}
          dims={[ 1,2,1 ]}
          offset={[ 0, -1,0 ]}
          >
            <Model 
            path='/the_spongebob_squarepants/scene.gltf'
            scale={new Array(3).fill(0.006)}
            //position={[ -1, -1.3, 0 ]}
            />       
          </BoundingBox>
        </Dragable>            
        {/*<Suspense fallback={null}>
          <Box position = {[ 0, 0.1, 0]}/> 
        </Suspense>  
        <Suspense fallback={null}>
          <Box position = {[ -4, 0.1, 0]}/> 
        </Suspense> */} 
        <group rotation={new Array(0,0,0)}>
          <Model
            path='/biped_robot/scene.gltf'
            scale={new Array(3).fill(0.01)}
          />
        </group>
          
              
      </Suspense>
    )      
}

export default Cars