import GiantGoomba from "../components/GiantGoomba";
import Goomba from "../components/Goomba";
import Platform from "../components/Platform";
import { LevelProps } from "./Level";


export default function Level2({ gameObjects, level } : LevelProps) : JSX.Element {

    return level.current === 2 ? (
        <>
            <Platform platform={gameObjects.platforms.level2[0].ref} positionX={500} positionY={250} width={50} />
            <Platform platform={gameObjects.platforms.level2[1].ref} positionX={900} positionY={500} width={50} />
            <Platform platform={gameObjects.platforms.level2[2].ref} positionX={1500} positionY={400} width={100} />
            <Platform platform={gameObjects.platforms.level2[3].ref} positionX={3000} positionY={49} type="pipe" width={200} />
            <Platform platform={gameObjects.platforms.level2[4].ref} positionX={3700} positionY={250} width={100} />
            <Platform platform={gameObjects.platforms.level2[5].ref} positionX={6000} positionY={250} />

            <Goomba goomba={gameObjects.goombas.level2[0]} id="1" position={600} />
            <Goomba goomba={gameObjects.goombas.level2[1]} id="2" position={700} />
            <Goomba goomba={gameObjects.goombas.level2[2]} id="3" position={800} />
            <Goomba goomba={gameObjects.goombas.level2[3]} id="4" position={1000} />
            <Goomba goomba={gameObjects.goombas.level2[4]} id="5" position={1400} />
            <Goomba goomba={gameObjects.goombas.level2[5]} id="6" position={2800} />
            <Goomba goomba={gameObjects.goombas.level2[6]} id="7" position={3200} />
            <Goomba goomba={gameObjects.goombas.level2[7]} id="8" position={3500} />
            <Goomba goomba={gameObjects.goombas.level2[8]} id="9" position={3900} />
            <Goomba goomba={gameObjects.goombas.level2[9]} id="10" position={5800} />
            <Goomba goomba={gameObjects.goombas.level2[10]} id="11" position={6000} />
            <Goomba goomba={gameObjects.goombas.level2[11]} id="12" position={6200} />

            <GiantGoomba giantGoomba={gameObjects.giantGoombas.level2[0]} position={7500} />
        </>
    ) : (
        <></>
    )

}