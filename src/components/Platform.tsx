import { MutableRefObject } from "react"
import pipeImg from "../assets/pipe.png"

interface PlatformProps {
    platform : MutableRefObject<HTMLDivElement>,
    positionX : number,
    positionY : number,
    type? : 'pipe' | 'ledge',
    width? : number
}

export default function Platform({ platform, positionX, positionY, type = 'ledge', width = 300 } : PlatformProps) {

    return(
        <div 
            ref={platform}
            className={` platform
                absolute overflow-hidden
                ${ type === 'pipe' ? `w-[200px] h-[200px]` : '' } 
                ${ type === 'ledge' ? `h-[50px] brick` : ''}
            `}
            style={{left : positionX + 'px', bottom : positionY + 'px', width : width + 'px'}}
        >
            { type === 'pipe' && <img src={pipeImg} /> }

        </div>
    )
}