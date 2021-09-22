import React, {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import Model from './Scene'
import Lights from "./lights";
import './showEarth.css'
import { Html, OrbitControls, Stars } from "@react-three/drei";
import { useHistory } from "react-router-dom";

export default function ShowEarth(props) {
    const history = useHistory();

    const handleRoute = () =>{ 
        history.push("/gallery");
      }
      
    return (
        <div className="container">
        <h1 className="home_title">Explore Space</h1> 
        <Canvas
            colorManagement
            shadowMap
            camera={{position: [-5,4,60], fov:80}}>
        <Html className="button_wrapper">
            <button className="start_exploring" onClick={handleRoute}>start exploring</button>
        </Html>
        <Lights/>
        <Suspense fallback={<div>Loading... </div>}>
            <Model/>
        </Suspense>
        <OrbitControls/>
        <Stars/>
        </Canvas>
        </div>
    )
}