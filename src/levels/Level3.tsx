import GiantGoomba from "../components/GiantGoomba";
import Platform from "../components/Platform";
import { LevelProps } from "./Level";


export default function level3({ gameObjects, level } : LevelProps) : JSX.Element {

    const platforms = gameObjects.platforms
    const giantGoombas = gameObjects.giantGoombas

    return level.current === 3 ? (
        <>
            <Platform platform={platforms.level3[0].ref} x={750} y={49} type="pipe" />
            <Platform platform={platforms.level3[1].ref} x={1500} y={49} type="pipe" />
            <Platform platform={platforms.level3[2].ref} x={2500} y={49} type="pipe" />
            <Platform platform={platforms.level3[3].ref} x={3500} y={49} type="pipe" />
            <Platform platform={platforms.level3[4].ref} x={3700} y={49} type="pipe" />
            <Platform platform={platforms.level3[5].ref} x={6000} y={49} type="pipe" />

            <GiantGoomba giantGoomba={giantGoombas.level3[0]} x={1000} />
            <GiantGoomba giantGoomba={giantGoombas.level3[1]} x={2500} />
            <GiantGoomba giantGoomba={giantGoombas.level3[2]} x={4000} />
            <GiantGoomba giantGoomba={giantGoombas.level3[3]} x={5500} />
            <GiantGoomba giantGoomba={giantGoombas.level3[4]} x={6500} />
            <GiantGoomba giantGoomba={giantGoombas.level3[5]} x={7600} />
        </>
    ) : (
        <></>
    )

}