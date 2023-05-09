import { useContext } from "react"
import { GameContext } from "../App"
import { UseGameContextInterface } from "../hooks/useGameContext"

export default function GameResetBtn() {

    const game: UseGameContextInterface = useContext(GameContext)

    if( game.isGameOver || game.isGameWon ) {
        return(
            <button 
                className="game-over-anim absolute z-50 top-8 left-1/2 -translate-x-1/2 px-8 py-4 rounded bg-lime-300 border-2 border-lime-500 text-2xl hover:bg-lime-200"
                onClick={ () => game.resetGame() }
            >
                Reset Game
            </button>
        )
    }
    
    return <></>
}