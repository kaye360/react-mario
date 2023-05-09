import { MutableRefObject, ReactElement, useContext, useEffect, useRef } from "react"
import marioRunImg from "../assets/mario-run.gif"
import marioStillImg from "../assets/mario-still.gif"
import marioJumpImg from "../assets/mario-jump.gif"
import { GameContext } from "../App"
import { UseGameContextInterface } from "../hooks/useGameContext"

interface MarioProps {
	mario :  MutableRefObject<HTMLDivElement>
}

export default function Mario({mario} : MarioProps) : ReactElement {

	const game: UseGameContextInterface = useContext(GameContext)

	let marioImg = useRef( marioRunImg )

	if( game.isGameOver ) {
		// Mario is dead
		marioImg.current = marioJumpImg

	} else if( game.controller.keys.up ) {
		// Jumping
		marioImg.current = marioJumpImg

	} else if( !game.controller.keys.up && game.controller.keys.left  ) {
		// Run left
		marioImg.current = marioRunImg

	} else if( !game.controller.keys.up && game.controller.keys.right  ) {
		// Run right
		marioImg.current = marioRunImg

	} else if( !game.controller.keys.left && !game.controller.keys.right && !game.controller.keys.up) {
		// Stand still
		marioImg.current = marioStillImg

	} else {
		// Default
		marioImg.current = marioRunImg
	}

	return(
		<div 
			id="mario" 
			className={`absolute bottom-[49px] left-[300px] z-50 w-[130px] h-[165px] overflow-hidden ${game.isGameOver ? 'is-dead' : ''} ${game.isGameWon ? 'is-won' : ''}`}
			ref={mario}
		>
			<img src={marioImg.current} className="w-[150px] max-w-none h-[165px] absolute left-[-20px] bottom-0 " />
		</div>
	)
}