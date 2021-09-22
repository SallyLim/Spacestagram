import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";


function Model() {
    const {scene} = useGLTF("./planet_earth/scene.gltf")
    return <primitive object={scene} />
}

export default function ShowEarth(props) {
    return (
        <div style= {{height: "100vh", backgroundColor: "#000000"}}>
            <Canvas camera={{position:[10,18,23], fov:0.5}}>
                <Suspense fallback={null}>
                    <Model/>
                </Suspense>
            </Canvas>
        </div>
  )
}