import { ReactElement } from "react"

interface GameProps {
	children : ReactElement[] | ReactElement
}

export default function Game({children} : GameProps) {
	return (
		<div id="game" className='grid items-center justify-center h-screen'>
			<div className='relative border border-slate-400 w-[800px] h-[600px]  overflow-hidden'>
				{children}
			</div>
		</div>
	)
}
