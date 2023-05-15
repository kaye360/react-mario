import { useState } from "react"
import { UsePlayerPosition } from "./usePlayerPosition"
import { UseGameObjects, gameObject } from "./useGameObjects"
import { UseController } from "./useController"


interface UseGameContextProps {
    playerPosition : UsePlayerPosition, 
    gameObjects    : UseGameObjects,
    controller     : UseController
}

export interface UseGameContextInterface {
    isGameOver     : boolean,
    isGameWon      : boolean,
    endGame        : Function,
    winGame        : Function,
    resetGame      : Function,
    mario          : gameObject,
    playerPosition : UsePlayerPosition,
    controller     : UseController
}

export default function useGameContext(
    {playerPosition, gameObjects, controller} : UseGameContextProps
) : UseGameContextInterface  {

    const [isGameOver, setIsGameOver] = useState(false)
    const [isGameWon, setIsGameWon]   = useState(false)

    const mario = gameObjects.mario

    function endGame() : void {
        setIsGameOver(true)
    }

    function winGame(): void {
        setIsGameWon(true)
    }

    function resetGame() : void {
        resetCamera()
        resetMario()
        resetPlayerPosition()
        resetSkyPosition()
        resetGameState()
    }
    
    // Helper functions
    
    function resetMario() : void {
        gameObjects.mario.current.classList.add('is-facing-right')
        gameObjects.mario.current.classList.remove('is-facing-left')
        gameObjects.mario.current.style.translate = "0"
    }
    
    function resetCamera() : void {
        gameObjects.camera.current.style.left = '0px'
    }
    
    function resetPlayerPosition() : void {
        playerPosition.setPosition({x: 0, y: 0})
    }
    
    function resetSkyPosition() {
        gameObjects.sky.current.style.left ='0px'
    }

    function resetGameState() {
        setIsGameOver(false)
        setIsGameWon(false)
    }
    
    return { 
        isGameOver, isGameWon, 
        winGame, endGame, resetGame, 
        mario, controller, playerPosition,
    }
}