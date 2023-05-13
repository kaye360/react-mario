import Goomba from "../components/Goomba";
import Platform from "../components/Platform";
import { LevelProps } from "./Level";


export default function Level1({ gameObjects, level } : LevelProps) : JSX.Element {

    return level.current === 1 ? (
        <>
            <Platform platform={gameObjects.platforms.level1[0].ref} positionX={1500} positionY={49} type="pipe" width={200} />
            <Platform platform={gameObjects.platforms.level1[1].ref} positionX={3500} positionY={250} />
            <Platform platform={gameObjects.platforms.level1[2].ref} positionX={3900} positionY={400} />
            <Platform platform={gameObjects.platforms.level1[3].ref} positionX={5000} positionY={400} />
            <Platform platform={gameObjects.platforms.level1[4].ref} positionX={6100} positionY={400} />

            <Goomba goomba={gameObjects.goombas.level1[0]} id="1" position={700} />
            <Goomba goomba={gameObjects.goombas.level1[1]} id="2" position={1400} />
            <Goomba goomba={gameObjects.goombas.level1[2]} id="3" position={2500} />
            <Goomba goomba={gameObjects.goombas.level1[3]} id="4" position={2700} />
            <Goomba goomba={gameObjects.goombas.level1[4]} id="5" position={3500} />
            <Goomba goomba={gameObjects.goombas.level1[5]} id="6" position={4500} />
            <Goomba goomba={gameObjects.goombas.level1[6]} id="7" position={4500} />
            <Goomba goomba={gameObjects.goombas.level1[7]} id="8" position={4500} />
            <Goomba goomba={gameObjects.goombas.level1[8]} id="9" position={6200} />
            <Goomba goomba={gameObjects.goombas.level1[9]} id="10" position={6500} />
            <Goomba goomba={gameObjects.goombas.level1[10]} id="11" position={6800} />
            <Goomba goomba={gameObjects.goombas.level1[11]} id="12" position={7500} />

        </>
    ) : (
        <></>
    )
}