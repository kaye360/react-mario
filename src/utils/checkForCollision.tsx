/*
Technically this isn't a hook as it is called within a loop. 
React hooks cannot be used here
*/

import { MutableRefObject } from "react"
import { isCollide, isTopCollide } from "./utils"
import { UseGameContextInterface } from "../hooks/useGameContext"
import { Platform, UseGameObjects } from "../hooks/useGameObjects"
import { useGravityInterface } from "../hooks/useGravity"

interface CheckForCollisionProps {
    gameObjects : UseGameObjects,
    game : UseGameContextInterface,
    gravity: useGravityInterface,
    maxJumpHeight : MutableRefObject<number>,
    level : number
}

export default function checkForCollision({ 
    gameObjects, game, gravity, maxJumpHeight, level
} : CheckForCollisionProps) : void {

    // Get Current Level
    let currentLevel: string = 'level' + level

    // Check for Goomba collision
    const currentLevelGoombas: MutableRefObject<HTMLDivElement>[] = gameObjects.goombas[currentLevel]
    currentLevelGoombas.forEach( goomba => {
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

    const currentLevelPlatforms: Platform[] = gameObjects.platforms[currentLevel]
    console.log(currentLevel)
    currentLevelPlatforms.forEach( (platform : Platform) => {
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