import { MutableRefObject } from "react"

interface GroundProps {
	ground:  MutableRefObject<HTMLDivElement>,
}

export default function Ground({ground} : GroundProps) {

	return(
		<div 
			id="ground" 
			className='absolute left-0 right-0 bottom-0 h-[50px] w-[99999px] -translate-x-[10px] text-white'
			ref={ground}
		>
		</div>
	)
}

