import { MouseEventHandler, useContext } from "react"
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
                    <NextLevelBtn func={gotoNextLevel} />
                ) : (
                    <ResetGameBtn func={resetGame} />
                )}

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


interface BtnProps {
    func : MouseEventHandler<HTMLButtonElement>
}


export function NextLevelBtn( {func} : BtnProps ) {
    return(
        <button onClick={ func } className="text-2xl border border-slate-400 bg-slate-600 px-8 py-4 rounded">
            Next Level
        </button>
    )
}


export function ResetGameBtn( {func} : BtnProps ) {
    return(
        <button onClick={ func } className="text-2xl border border-slate-400 bg-slate-600 px-8 py-4 rounded">
            Reset Game
        </button>
    )
}