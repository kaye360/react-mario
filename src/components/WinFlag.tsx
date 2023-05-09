import { MutableRefObject, ReactElement } from "react"
import winFlagImg from "../assets/win-flag.gif"

interface WinFlagProps {
    winFlag : MutableRefObject<HTMLDivElement>
}

export default function winFlag({winFlag} : WinFlagProps) : ReactElement {

    return(
        <img 
            src={winFlagImg} 
            className="absolute bottom-[50px] left-[8000px] h-[400px]" 
            // @ts-ignore
            ref={winFlag} 
        />
    )
}