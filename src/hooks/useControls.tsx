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

    const isPeaked = () : boolean =>  maxJumpHeight.current - gravity.ref.current < 10
    const isDescending = useRef<boolean>(false)

    function jump() : void {

        console.log(isDescending.current)
        
        if( isDescending.current ) return

        if( isPeaked() ) {
            isDescending.current = true
            gravity.velocity.current  = 2
            gravity.set(maxJumpHeight.current)
            setTimeout( () => isDescending.current = false, 800 )
            return
        }

        gravity.set( prev => prev + 20)
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