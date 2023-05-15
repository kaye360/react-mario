import { CSSProperties, ReactElement } from "react"
import { gameObject } from "../hooks/useGameObjects"


interface CameraProps {
    style    : CSSProperties,
    camera   : gameObject,
    children : ReactElement | ReactElement[]
}

export default function Camera({style, camera, children} : CameraProps) : ReactElement {

    return(
        <div 
            ref={camera}
            className=" absolute inset-0 z-20"
            style={style}
        >
            {children}
        </div>
    )
}