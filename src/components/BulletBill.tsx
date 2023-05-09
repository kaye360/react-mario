import { MutableRefObject, ReactElement } from "react"
import bulletBillImg from "../assets/bullet-bill.gif"

interface bulletBillProps {
	bulletBill : MutableRefObject<HTMLDivElement>,
}

export default function BulletBill({bulletBill} : bulletBillProps) : ReactElement {
	
	return(

		<div 
			id='bullet-bill'
			className='absolute bottom-[55px] left-[6000px] z-[9999] w-[150px] h-[150px]'
			ref={bulletBill}
		>
			<div className="absolute bottom-[-40px] -translate-x-[350px] bg-black w-[200px] h-4 rounded-3xl blur-xl"></div>
			<img src={bulletBillImg} />
		</div>
	)
}