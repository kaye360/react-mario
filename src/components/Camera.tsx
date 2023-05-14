import { CSSProperties, MutableRefObject, ReactElement } from "react"


interface CameraProps {
    style: CSSProperties,
    camera: MutableRefObject<HTMLDivElement>,
    children: ReactElement | ReactElement[]
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