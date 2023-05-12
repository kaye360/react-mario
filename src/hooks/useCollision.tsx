import { MutableRefObject } from "react"
import { isCollide, isTopCollide } from "../utils"
import { UseGameContextInterface } from "./useGameContext"
import { Platform, UseGameObjects } from "./useGameObjects"
import { useGravityInterface } from "./useGravity"

interface UseCollisionProps {
    gameObjects : UseGameObjects,
    game : UseGameContextInterface,
    gravity: useGravityInterface,
    maxJumpHeight : MutableRefObject<number>
}

export default function useCollision({ 
    gameObjects, game, gravity, maxJumpHeight 
} : UseCollisionProps) : void {

    // Check for Goomba collision
    gameObjects.goombas.forEach( goomba => {
        if( isCollide( goomba.current, game.mario.current ) ) {
            game.endGame()
        }
    })

    // Check for Bullet Bill collision
    if( isCollide( gameObjects.bulletBill.current, game.mario.current ) ) {
        game.endGame()
    } 

    // Check for Win Flag collision
    if( isCollide( gameObjects.winFlag.current, game.mario.current ) ) {
        game.winGame()
    } 

    // Check for Ground Top Collision
    if( isTopCollide( gameObjects.ground.current, gameObjects.mario.current ) ) {
        resetMaxJumpHeight()
    }

    // Check for Platforms Top Collision
    let isOnPlatform: boolean = false

    gameObjects.platforms.forEach( (platform : Platform) => {
        if( isTopCollide( platform.ref.current, gameObjects.mario.current ) ) {
            setPlatformJumpHeight(platform.jumpHeight)
            isOnPlatform = true
        }
    })
    if( !isOnPlatform ) gravity.resolveGravity()


    function resetMaxJumpHeight() : void {
        maxJumpHeight.current = 300
    }

    function setPlatformJumpHeight(height : number) : void {
        gravity.velocity.current = 0
        maxJumpHeight.current = height
    }

}