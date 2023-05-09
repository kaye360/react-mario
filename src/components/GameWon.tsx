import { useContext } from "react"
import { GameContext } from "../App"
import { UseGameContextInterface } from "../hooks/useGameContext"


export default function GameWon() {

    const game: UseGameContextInterface = useContext(GameContext)

    if( game.isGameWon ) {
        return(
        <>
            <div className="game-over-anim absolute inset-0 z-40  bg-emerald-400 ">
            </div>

            <div className="game-over-anim absolute inset-0 z-50 grid place-items-center font-bold  text-8xl text-white ">
                <div className="bg-emerald-700 bg-opacity-50 p-6">
                    You Won!!!
                </div>
            </div>
        </>
        )
    }

    return <></>

}