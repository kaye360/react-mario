import { MutableRefObject } from "react"

interface PlatformProps {
    platform : MutableRefObject<HTMLDivElement>,
    position : number
}

export default function Platform({ platform, position } : PlatformProps) {

    return(
        <div 
            ref={platform}
            className="absolute left-[600px] bottom-[200px] w-[300px] h-[20px] bg-red-500"
            style={{left : position + 'px'}}
        ></div>
    )
}