import { MutableRefObject, ReactElement } from "react"
import goombaImg from "../assets/goomba.png"

interface GiantGoombaProps {
	giantGoomba: MutableRefObject<HTMLDivElement>,
	x : number
}

export default function GiantGoomba({giantGoomba, x} : GiantGoombaProps) : ReactElement {
	
	return(
		<div 
			className='giant-goomba absolute bottom-[49px] z-[9999] w-[300px] h-[280px] '
			style={{left : x + 'px'}}
			ref={giantGoomba}
		>
			<img src={goombaImg} />
		</div>
	)
}