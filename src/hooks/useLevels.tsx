import { MutableRefObject, useEffect, useRef, useState } from "react";

export interface UseLevelsProps {
    totalLevels : number
}

export interface UseLevelsReturn {
    current : number,
    next : Function,
    reset : Function,
    ref : MutableRefObject<number>
}

export default function useLevels( { totalLevels} : UseLevelsProps ) : UseLevelsReturn {

    const startingLevel = 1
    const [current, setCurrent] = useState<number>(startingLevel)

    const ref = useRef<number>(startingLevel)

    useEffect(() => {
        ref.current = current
    }, [current])

    function next() : void {
        if(current < totalLevels) {
            setCurrent(prev => prev + 1)
        }
    }

    function reset() : void {
        setCurrent(1)
    }

    return { current, next, reset, ref }
}