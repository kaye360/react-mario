import GiantGoomba from "../components/GiantGoomba";
import Goomba from "../components/Goomba";
import Platform from "../components/Platform";
import { LevelProps } from "./Level";


export default function Level2({ gameObjects, level } : LevelProps) : JSX.Element {

    const { platforms, goombas, giantGoombas} = gameObjects

    return level.current === 2 ? (
        <>
            <Platform platform={platforms.level2[0].ref} x={500} y={250} width={50} />
            <Platform platform={platforms.level2[1].ref} x={900} y={500} width={50} />
            <Platform platform={platforms.level2[2].ref} x={1500} y={400} width={100} />
            <Platform platform={platforms.level2[3].ref} x={3000} y={49} type="pipe" width={200} />
            <Platform platform={platforms.level2[4].ref} x={3700} y={250} width={100} />
            <Platform platform={platforms.level2[5].ref} x={6000} y={250} />

            <Goomba goomba={goombas.level2[0]} id="1" x={600} />
            <Goomba goomba={goombas.level2[1]} id="2" x={700} />
            <Goomba goomba={goombas.level2[2]} id="3" x={800} />
            <Goomba goomba={goombas.level2[3]} id="4" x={1000} />
            <Goomba goomba={goombas.level2[4]} id="5" x={1400} />
            <Goomba goomba={goombas.level2[5]} id="6" x={2800} />
            <Goomba goomba={goombas.level2[6]} id="7" x={3200} />
            <Goomba goomba={goombas.level2[7]} id="8" x={3500} />
            <Goomba goomba={goombas.level2[8]} id="9" x={3900} />
            <Goomba goomba={goombas.level2[9]} id="10" x={5800} />
            <Goomba goomba={goombas.level2[10]} id="11" x={6000} />
            <Goomba goomba={goombas.level2[11]} id="12" x={6200} />

            <GiantGoomba giantGoomba={giantGoombas.level2[0]} x={7500} />
        </>
    ) : (
        <></>
    )

}