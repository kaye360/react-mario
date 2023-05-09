import { MutableRefObject } from "react"
import cloudImg from "../assets/clouds.png"

interface SkyProps {
	sky : MutableRefObject<HTMLDivElement>
}

export default function Sky({sky} : SkyProps) {
	return(
		<div id="sky" className='absolute inset-0 z-0 bg-sky-400 t' ref={sky}>


			<img 
				src={cloudImg} 
				className='absolute top-[80px] left-[50px] w-[200px] h-[150px]' 
			/>
			<img 
				src={cloudImg} 
				className='absolute top-[200px] left-[600px] w-[200px] h-[150px]' 
			/>
			<img 
				src={cloudImg} 
				className='absolute top-[120px] left-[900px] w-[200px] h-[150px]' 
			/>


		</div>
	)
}