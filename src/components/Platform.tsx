import { MutableRefObject } from "react"
import pipeImg from "../assets/pipe.png"

interface PlatformProps {
    platform : MutableRefObject<HTMLDivElement>,
    positionX : number,
    positionY : number,
    type? : 'pipe' | 'ledge'
}

export default function Platform({ platform, positionX, positionY, type = 'ledge' } : PlatformProps) {

    return(
        <div 
            ref={platform}
            className={`
                absolute overflow-hidden
                ${ type === 'pipe' ? 'w-[200px] h-[200px]' : '' } 
                ${ type === 'ledge' ? 'w-[300px] h-[50px] brick' : ''}
            `}
            style={{left : positionX + 'px', bottom : positionY + 'px'}}
        >
            { type === 'pipe' && <img src={pipeImg} /> }

        </div>
    )
}