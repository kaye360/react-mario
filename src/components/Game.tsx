import { ReactElement } from "react"

interface GameProps {
	children : ReactElement[] | ReactElement
}

export default function Game({children} : GameProps) {
	return (
		<>
			<div id="game" className='hidden md:grid items-center justify-center h-screen'>
				<div className='relative border border-slate-400 w-[800px] h-[600px]  overflow-hidden'>
					{children}
				</div>
			</div>
			<div className="md:hidden m-8 p-8 rounded-xl border border-slate-400 bg-slate-100">
				This game only works on larger screens.
			</div>
		</>
	)
}
