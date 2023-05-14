import GiantGoomba from "../components/GiantGoomba";
import Goomba from "../components/Goomba";
import Platform from "../components/Platform";
import { LevelProps } from "./Level";


export default function level3({ gameObjects, level } : LevelProps) : JSX.Element {

    return level.current === 3 ? (
        <>
            <Platform platform={gameObjects.platforms.level3[0].ref} positionX={750} positionY={49} type="pipe" />
            <Platform platform={gameObjects.platforms.level3[1].ref} positionX={1500} positionY={49} type="pipe" />
            <Platform platform={gameObjects.platforms.level3[2].ref} positionX={2500} positionY={49} type="pipe" />
            <Platform platform={gameObjects.platforms.level3[3].ref} positionX={350000} positionY={49} type="pipe" />
            <Platform platform={gameObjects.platforms.level3[4].ref} positionX={3700} positionY={49} type="pipe" />
            <Platform platform={gameObjects.platforms.level3[5].ref} positionX={6000} positionY={49} type="pipe" />

            <GiantGoomba giantGoomba={gameObjects.giantGoombas.level3[0]} position={1000} />
            <GiantGoomba giantGoomba={gameObjects.giantGoombas.level3[1]} position={2500} />
            <GiantGoomba giantGoomba={gameObjects.giantGoombas.level3[2]} position={4000} />
            <GiantGoomba giantGoomba={gameObjects.giantGoombas.level3[3]} position={5500} />
            <GiantGoomba giantGoomba={gameObjects.giantGoombas.level3[4]} position={6500} />
            <GiantGoomba giantGoomba={gameObjects.giantGoombas.level3[5]} position={7600} />
        </>
    ) : (
        <></>
    )

}