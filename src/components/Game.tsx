import { ReactElement } from "react"

interface GameProps {
	children : ReactElement[] | ReactElement
}

export default function Game({children} : GameProps) {
	return (
		<>
			<div id="game" className='grid items-center justify-center h-[90vh]'>
				<div className='relative border border-slate-400 w-screen h-full  overflow-hidden'>
					{children}
				</div>
			</div>
			<div className="h-[10vh] bg-slate-700 grid place-items-center text-slate-200">
				<div className="flex items-center gap-8">
					<div>
						Made by: 
						<a href="https://joshkaye.dev" className="underline hover:text-sky-400">
							Josh Kaye
						</a>
					</div>

					<a href="https://github.com/kaye360/react-mario" className="inline-block px-2 py-1 border border-slate rounded hover:text-sky-400 hover:border-sky-400">
						GitHub
					</a>
					 
				</div>
			</div>
		</>
	)
}
