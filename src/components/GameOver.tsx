import { useContext } from "react"
import { GameContext } from "../App"
import { UseGameContextInterface } from "../hooks/useGameContext"


export default function GameOver() {

    const game: UseGameContextInterface = useContext(GameContext)

    if( game.isGameOver ) {
        return(
            <div className="game-over-anim absolute inset-0 margin-auto grid place-items-center bg-red-400 text-6xl text-white">
                GAME OVER
            </div>
        )
    }

    return <></>

}