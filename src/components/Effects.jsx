import { 
    EffectComposer, 
    DepthOfField,
    Bloom,
    Noise,
    GodRays
  } from '@react-three/postprocessing';
import {useState, useEffect} from 'react';
import { useThree } from '@react-three/fiber'

const Effects = () => {
    const [lights, setLights] = useState(null)
    const {scene} = useThree()

    useEffect(() => {
        if(scene.lights && scene.lights.length === 1)
            setLights(scene.lights)
    }, [scene.length])

    return(
        lights ?
        <EffectComposer>
            <DepthOfField 
                focusDistance={0.2} 
                focalLength={1.5} 
                bokehScale={10} 
                height={480}
            />        
            <Bloom 
                luminanceThreshold={0.4} 
                luminanceSmoothing={0.9} 
                height={300} 
            />
            <Noise 
                opacity={0.02} 
            />
            {lights.map(light =>
                <GodRays 
                key={light.current.uuid}
                sun={light.current}
                />
            )}
        </EffectComposer>
        :
        null
    )
}

export default Effects