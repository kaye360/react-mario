import Goomba from "../components/Goomba";
import Platform from "../components/Platform";
import { LevelProps } from "./Level";


export default function Level1({ gameObjects, level } : LevelProps) : JSX.Element {

    return level.current === 1 ? (
        <>
            <Platform platform={gameObjects.platforms[0].ref} positionX={1500} positionY={49} type="pipe" width={200} />
            <Platform platform={gameObjects.platforms[1].ref} positionX={3500} positionY={250} />
            <Platform platform={gameObjects.platforms[2].ref} positionX={3900} positionY={400} />
            <Platform platform={gameObjects.platforms[3].ref} positionX={5000} positionY={400} />
            <Platform platform={gameObjects.platforms[4].ref} positionX={6100} positionY={400} />

            <Goomba goomba={gameObjects.goombas[0]} id="1" position={700} />
            <Goomba goomba={gameObjects.goombas[1]} id="2" position={1400} />
            <Goomba goomba={gameObjects.goombas[2]} id="3" position={2500} />
            <Goomba goomba={gameObjects.goombas[3]} id="4" position={2700} />
            <Goomba goomba={gameObjects.goombas[4]} id="5" position={3500} />
            <Goomba goomba={gameObjects.goombas[5]} id="6" position={4500} />
            <Goomba goomba={gameObjects.goombas[6]} id="7" position={4500} />
            <Goomba goomba={gameObjects.goombas[7]} id="8" position={4500} />
            <Goomba goomba={gameObjects.goombas[8]} id="9" position={6200} />
            <Goomba goomba={gameObjects.goombas[9]} id="10" position={6500} />
            <Goomba goomba={gameObjects.goombas[10]} id="11" position={6800} />
            <Goomba goomba={gameObjects.goombas[11]} id="12" position={7500} />

        </>
    ) : (
        <></>
    )
}