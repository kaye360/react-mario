import { MutableRefObject } from "react"
import cloudImg from "../assets/clouds.png"
import hillImg from "../assets/hill.png"
import hillsEyesImg from "../assets/hills-eyes.png"

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
				className='absolute top-[200px] left-[700px] w-[200px] h-[150px]' 
			/>
			<img 
				src={cloudImg} 
				className='absolute top-[120px] left-[1300px] w-[200px] h-[150px]' 
			/>

			<img 
				src={hillImg}
				className="absolute bottom-[49px] left-[100px] h-[200px] max-w-none"
			/>

			<img 
				src={hillsEyesImg}
				className="absolute bottom-[49px] left-[1500px] h-[400px] max-w-none"
			/>

		</div>
	)
}