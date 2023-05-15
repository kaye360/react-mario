import { useEffect } from "react"
import { UseController } from "./useController"


export default function useResolveKeyPress( controller : UseController ) : void {
    useEffect( () => {

		function resolveKeyPress(e: KeyboardEvent) : void {

			const keyState: boolean = e.type !== 'keyup'
			
			if( e.code === 'ArrowLeft') {
				controller.setKeys(prev => ({ ...prev, left : keyState }))
			}
			
			if( e.code === 'ArrowRight') {
				controller.setKeys(prev => ({ ...prev, right : keyState }))
			}

			if( e.code === 'ArrowUp') {
				controller.setKeys(prev => ({ ...prev, up : keyState }))
			}

		}

		document.addEventListener('keyup',   (e: any) => resolveKeyPress(e) )
		document.addEventListener('keydown', (e: any) => resolveKeyPress(e) )
	}, [])
}