import GiantGoomba from "../components/GiantGoomba";
import Goomba from "../components/Goomba";
import Platform from "../components/Platform";
import { LevelProps } from "./Level";


export default function Level2({ gameObjects, level } : LevelProps) : JSX.Element {

    if(level.current === 2) return(
        <>
            <Platform platform={gameObjects.platforms[5].ref} positionX={500} positionY={250} width={50} />
            <Platform platform={gameObjects.platforms[6].ref} positionX={900} positionY={500} width={50} />
            <Platform platform={gameObjects.platforms[7].ref} positionX={1500} positionY={400} width={100} />
            <Platform platform={gameObjects.platforms[8].ref} positionX={3000} positionY={49} type="pipe" width={200} />
            <Platform platform={gameObjects.platforms[9].ref} positionX={3700} positionY={250} width={100} />
            <Platform platform={gameObjects.platforms[10].ref} positionX={6000} positionY={250} />

            <Goomba goomba={gameObjects.goombas[12]} id="1" position={600} />
            <Goomba goomba={gameObjects.goombas[13]} id="2" position={700} />
            <Goomba goomba={gameObjects.goombas[14]} id="3" position={800} />
            <Goomba goomba={gameObjects.goombas[15]} id="4" position={1000} />
            <Goomba goomba={gameObjects.goombas[16]} id="5" position={1400} />
            <Goomba goomba={gameObjects.goombas[17]} id="6" position={2800} />
            <Goomba goomba={gameObjects.goombas[18]} id="7" position={3200} />
            <Goomba goomba={gameObjects.goombas[19]} id="8" position={3500} />
            <Goomba goomba={gameObjects.goombas[20]} id="9" position={3900} />
            <Goomba goomba={gameObjects.goombas[21]} id="10" position={5800} />
            <Goomba goomba={gameObjects.goombas[22]} id="11" position={6000} />
            <Goomba goomba={gameObjects.goombas[23]} id="12" position={6200} />

            <GiantGoomba giantGoomba={gameObjects.goombas[24]} position={7500} />
        </>
    )

    return <></>
}