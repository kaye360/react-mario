import { UseGameObjects } from "./useGameObjects"
import { UsePlayerPosition } from "./usePlayerPosition"

interface UseControlsProps {
    playerPosition : UsePlayerPosition,
    gameObjects    : UseGameObjects
    speed          : number,
    gameLength     : number
}

interface UseControls {
    move : Function
}

export default function useControls(
    { playerPosition, gameObjects, speed, gameLength } : UseControlsProps 
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

    function moveRight() : void {
        playerPosition.setPosition(prev => ({ ...prev, x: prev.x - speed, y: 0 }))

        let currentTranslate: string = gameObjects.mario.current.style.translate
        let currentPos: number = Number( currentTranslate.slice(0,-2) )
        let newPos: number = currentPos + 5

        if(newPos <= 100) {
            gameObjects.mario.current.style.translate = newPos + 'px'
        }
    }

    function moveLeft() : void {
        playerPosition.setPosition(prev => ({ ...prev, x: prev.x + speed, y: 0 }))

        let currentTranslate: string = gameObjects.mario.current.style.translate
        let currentPos: number = Number( currentTranslate.slice(0,-2) )
        let newPos: number = currentPos - 5

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

    function jump() : void {
        if( !gameObjects.mario.current.classList.contains('is-jumping') ) {
            gameObjects.mario.current.classList.add('is-jumping')
            setTimeout( () => gameObjects.mario.current.classList.remove('is-jumping'), 1000)
        }
    }

    function render() : void {
        gameObjects.movable.current.style.left = playerPosition.playerPosRef.current.x + 'px'
        const skyOffset = playerPosition.playerPosRef.current.x / 10
        gameObjects.sky.current.style.left = skyOffset + 'px'
    }

    return { move }
}