import { useContext } from "react"
import { GameContext } from "../App"
import { UseGameContextInterface } from "../hooks/useGameContext"

export default function GameResetBtn() {

    const game: UseGameContextInterface = useContext(GameContext)

    if( game.isGameOver || game.isGameWon ) {
        return(
            <button 
                className="game-over-anim absolute z-[9999999] top-8 left-1/2 -translate-x-1/2 px-8 py-4 rounded bg-orange-500 border-2 border-orange-700 text-2xl hover:bg-orange-300"
                onClick={ () => game.resetGame() }
            >
                Retry
            </button>
        )
    }
    
    return <></>
}