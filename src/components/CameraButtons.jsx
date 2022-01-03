import state from '../state'
import { Suspense } from "react";

const style = {
    zIndex: 1,
    position:'absolute',
    bottom: '30vh',
    height: '30px',
    width: '30px',
    background: 'white',
    textAlign:'center',
    borderRadius: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.7,
    border: '1px solid black',
    cursor: 'pointer'
}

const CameraButtons = ({}) => {
    //spongebob: 'defaultMaterial_24'
    //patrick: "mesh_0"

    const sets = {
        1:{
            cameraPos: [2,2,2],
            target: [1,1,0],
            name: "mesh_0"
        },
        2:{
            cameraPos: [-2,2,2],
            target: [-1,1,0],
            name: 'defaultMaterial_24'
        }
    }

    const handleClick = num => {
        state.cameraPos.set(...sets[num].cameraPos)
        state.target.set(...sets[num].target)
        state.activeMeshName = sets[num].name
        state.shouldUpdate = true
    }

    return(
        <Suspense fallback={null}>
            <button
                onClick={e => handleClick(2)}
                style = {{
                    left: '40vw',
                    ...style
                }}
            >
                {'<'}
            </button>

            <button
                onClick={e => handleClick(1)}
                style = {{
                    right: '40vw',
                    ...style
                }}
            >
                {'>'}
            </button>
        </Suspense>
    )
}

export default CameraButtons