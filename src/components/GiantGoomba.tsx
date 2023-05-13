import { MutableRefObject, ReactElement } from "react"
import goombaImg from "../assets/goomba.png"

interface GiantGoombaProps {
	giantGoomba: MutableRefObject<HTMLDivElement>,
	position : number
}

export default function GiantGoomba({giantGoomba, position} : GiantGoombaProps) : ReactElement {
	
	return(
		<div 
			className='giant-goomba absolute bottom-[49px] z-[9999] w-[300px] h-[280px] '
			style={{left : position + 'px'}}
			ref={giantGoomba}
		>
			<img src={goombaImg} />
		</div>
	)
}