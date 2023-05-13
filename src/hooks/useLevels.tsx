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

    const [current, setCurrent] = useState<number>(1)

    const ref = useRef<number>(1)

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