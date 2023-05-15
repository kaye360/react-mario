import { UseGameObjects } from "../hooks/useGameObjects";
import { UseLevelsReturn } from "../hooks/useLevels";

export interface LevelProps {
    gameObjects : UseGameObjects,
    level       : UseLevelsReturn
}