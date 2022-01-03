import './App.css';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Suspense } from 'react';
import Background from './components/Background';
import Orbit from './components/Orbit';
import Floor from './components/Floor';
import ColorPicker from './components/ColorPicker';
import Cars from './components/Cars';
import Assets from './components/Assets';
import CameraControls from './components/CameraControls';
import CameraButtons from './components/CameraButtons';
import Lights from './components/Lights';
import Effects from './components/Effects'


function App(){

  return(
    <div style={{height: '100vh', width: '100vw'}}>
    <ColorPicker/>
    <CameraButtons/>
      <Canvas 
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
          depth: false
        }}        
        shadows
        style={{background: 'black'}} 
        camera = {{position: [ 3, 3, 3 ]}}
      >
        <CameraControls/>
        <Lights/>
        <Orbit />
        
        <Assets/> 
        <Physics>
          <Cars/>
          <Floor position = {[0,-5,0]}/>             
        </Physics>  

        <Suspense fallback={null}>
          <Background position = {[ 0, 1, 0]}/>         
        </Suspense>
        {/*<axesHelper args={[5]}/>*/}
        <Effects/> 
      </Canvas>    
    </div>
  );
}

export default App;