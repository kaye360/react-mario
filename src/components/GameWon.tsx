import { useContext } from "react"
import { GameContext } from "../App"
import { UseGameContextInterface } from "../hooks/useGameContext"
import { UseLevelsReturn } from "../hooks/useLevels"

interface GameWonProps {
    level : UseLevelsReturn,
    totalLevels : number
}

export default function GameWon({ level, totalLevels } : GameWonProps ) : JSX.Element {

    const game: UseGameContextInterface = useContext(GameContext)

    function gotoNextLevel() : void {
        level.next()
        game.resetGame()
    }

    function resetGame() : void {
        level.reset()
        game.resetGame()
    }

    if( game.isGameWon ) {
        return(
        <>
            <div className="game-over-anim absolute inset-0 z-40  bg-emerald-400 ">
            </div>


            <div className="game-over-anim absolute inset-0 z-50 grid place-items-center font-bold  text-8xl text-white ">

                { level.current !== totalLevels ? (
                    <button onClick={ gotoNextLevel }>
                        Next Level
                    </button>
                ) : (
                    <button onClick={ resetGame }>
                        Reset Game
                    </button>
                )
                }

                <div className="bg-emerald-700 bg-opacity-50 p-6">
                    { level.current === totalLevels ? (
                        <span>
                            You Won!!!  
                        </span>
                    ) : (
                        <span>
                            Nice Job!
                        </span>
                    )}
                </div>
            </div>
        </>
        )
    }

    return <></>

}