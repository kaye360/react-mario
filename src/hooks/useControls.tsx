import { MutableRefObject, useRef } from "react"
import { UseGameObjects } from "./useGameObjects"
import { useGravityInterface } from "./useGravity"
import { UsePlayerPosition } from "./usePlayerPosition"

interface UseControlsProps {
    playerPosition : UsePlayerPosition,
    gameObjects    : UseGameObjects
    speed          : number,
    gameLength     : number,
    maxJumpHeight  : MutableRefObject<number>,
    gravity        : useGravityInterface
}

interface UseControls {
    move : Function
}

export default function useControls(
    { playerPosition, gameObjects, speed, gameLength, maxJumpHeight, gravity } : UseControlsProps 
) : UseControls {

    function move( direction : 'left' | 'right' | 'up' ) : void {

        const playerIsAtStart: boolean = playerPosition.playerPosRef.current.x >= 0
        const playerIsAtEnd:   boolean = playerPosition.playerPosRef.current.x <= -gameLength

        if( direction === 'right' && !playerIsAtEnd ) {
            moveRight()
            faceRight()
        }
        
        if( direction === 'left' && !playerIsAtStart ) {
            moveLeft()            
            faceLeft()
        }
        
        if( direction === 'up' ) {
            jump()
        }

        render()
    }

    // Helper functions

    function moveRight() : void {

        // Set Game Position
        playerPosition.setPosition(prev => ({ ...prev, x: prev.x - speed, y: 0 }))

        // +TranslateX mario within frame
        let currentTranslate: string = gameObjects.mario.current.style.translate
        let currentPos: number       = Number( currentTranslate.slice(0,-2) )
        let newPos: number           = currentPos + 5

        if(newPos <= 100) {
            gameObjects.mario.current.style.translate = newPos + 'px'
        }
    }

    function moveLeft() : void {

        // Set Game Position
        playerPosition.setPosition(prev => ({ ...prev, x: prev.x + speed, y: 0 }))

        // -TranslateX mario within frame
        let currentTranslate: string = gameObjects.mario.current.style.translate
        let currentPos: number       = Number( currentTranslate.slice(0,-2) )
        let newPos: number           = currentPos - 5

        if(newPos >= -100) {
            gameObjects.mario.current.style.translate = newPos + 'px'
        }
    }

    function faceRight() : void {
        gameObjects.mario.current.classList.add('is-facing-right')
        gameObjects.mario.current.classList.remove('is-facing-left')
    }

    function faceLeft() : void {
        gameObjects.mario.current.classList.add('is-facing-left')
        gameObjects.mario.current.classList.remove('is-facing-right')
    }

    const isJumpedAtMaxHeight = useRef(false)

    function jump() : void {

        // If the jump has reached the max height, disable jumping
        if( isJumpedAtMaxHeight.current ) return

        // If we are in a jump, disable jumping
        if( gravity.velocity.current > 10 ) return

        if(gravity.ref.current < maxJumpHeight.current ) {
            // If we are jumping and are below the maxJumpHeight, continue upward
            gravity.set(prev => prev + 20)
        } else {
            // We are at maxJumpHeight, so disible jumping for 400ms
            gravity.set( maxJumpHeight.current )
            isJumpedAtMaxHeight.current = true
            setTimeout( () => isJumpedAtMaxHeight.current = false, 400 )
        }
    }

    function setCameraXPos() : void {
        gameObjects.camera.current.style.left = playerPosition.playerPosRef.current.x + 'px'
    }

    function setSkyXPos() : void {
        const skyOffset = playerPosition.playerPosRef.current.x / 10
        gameObjects.sky.current.style.left = skyOffset + 'px'
    }

    function render() : void {
        setCameraXPos()
        setSkyXPos()
    }

    return { move }
}