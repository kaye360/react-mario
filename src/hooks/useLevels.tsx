import { useState } from "react";

export interface UseLevelsProps {
    totalLevels : number
}

export interface UseLevelsReturn {
    current : number,
    next : Function,
    reset : Function
}

export default function useLevels( { totalLevels} : UseLevelsProps ) : UseLevelsReturn {

    const [current, setCurrent] = useState<number>(1)

    function next() : void {
        if(current < totalLevels) {
            setCurrent(prev => prev + 1)
        }
    }

    function reset() : void {
        setCurrent(1)
    }

    return { current, next, reset }
}