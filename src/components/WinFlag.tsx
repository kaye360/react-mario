import { ReactElement } from "react"
import winFlagImg from "../assets/win-flag.gif"
import { gameObject } from "../hooks/useGameObjects"

interface WinFlagProps {
    winFlag : gameObject
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