import Goomba from "../components/Goomba";
import Platform from "../components/Platform";
import { LevelProps } from "./Level";


export default function Level1({ gameObjects, level } : LevelProps) : JSX.Element {

    const platforms = gameObjects.platforms
    const goombas = gameObjects.goombas

    return level.current === 1 ? (
        <>
            <Platform platform={platforms.level1[0].ref} x={1500} y={49} type="pipe" width={200} />
            <Platform platform={platforms.level1[1].ref} x={3500} y={250} />
            <Platform platform={platforms.level1[2].ref} x={3900} y={400} />
            <Platform platform={platforms.level1[3].ref} x={5000} y={400} />
            <Platform platform={platforms.level1[4].ref} x={6100} y={400} />

            <Goomba goomba={goombas.level1[0]} id="1" x={700} />
            <Goomba goomba={goombas.level1[1]} id="2" x={1400} />
            <Goomba goomba={goombas.level1[2]} id="3" x={2500} />
            <Goomba goomba={goombas.level1[3]} id="4" x={2700} />
            <Goomba goomba={goombas.level1[4]} id="5" x={3500} />
            <Goomba goomba={goombas.level1[5]} id="6" x={4500} />
            <Goomba goomba={goombas.level1[6]} id="7" x={4500} />
            <Goomba goomba={goombas.level1[7]} id="8" x={4500} />
            <Goomba goomba={goombas.level1[8]} id="9" x={6200} />
            <Goomba goomba={goombas.level1[9]} id="10" x={6500} />
            <Goomba goomba={goombas.level1[10]} id="11" x={6800} />
            <Goomba goomba={goombas.level1[11]} id="12" x={7500} />

        </>
    ) : (
        <></>
    )
}