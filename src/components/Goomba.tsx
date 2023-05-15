import { ReactElement } from "react"
import goombaImg from "../assets/goomba.png"
import { gameObject } from "../hooks/useGameObjects"

export interface GoombaProps {
	goomba : gameObject,
	x 	   : number,
	id	   : string
}

export default function Goomba({goomba, id, x} : GoombaProps) : ReactElement {
	
	return(
		<div 
			id={'goomba' + id}
			className='hidden goomba absolute bottom-[35px] z-[9999] w-[60px] h-[70px]'
			style={{left : x + 'px'}}
			ref={goomba}
		>
			<img src={goombaImg} />
		</div>
	)
}