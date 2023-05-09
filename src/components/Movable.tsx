import { CSSProperties, MutableRefObject, ReactElement } from "react"


interface MovableProps {
    style: CSSProperties,
    movable: MutableRefObject<HTMLDivElement>,
    children: ReactElement | ReactElement[]
}

export default function Movable({style, movable, children} : MovableProps) : ReactElement {

    return(
        <div 
            ref={movable}
            className=" absolute inset-0 z-20"
            style={style}
        >
            {children}
        </div>
    )
}