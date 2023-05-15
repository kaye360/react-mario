import { useState, useRef, useEffect, Dispatch, MutableRefObject } from "react"

export interface useGravityInterface {
    gravity        : number,
    set            : Dispatch<React.SetStateAction<number>>,
    ref            : MutableRefObject<number>,
    velocity       : MutableRefObject<number>,
    resolveGravity : Function
}

export default function useGravity() : useGravityInterface {

    const [gravity, set] = useState(500)
	const ref            = useRef(500)
	const velocity       = useRef(1)

    // Sync ref and gravity state
    // Set base velocity
	useEffect( () => {
		ref.current = gravity
        if(gravity < 49) {
            velocity.current = 1
            set(49)
        }
	}, [gravity])

    /**
     * @todo Come back to this and get * 1.1 to work
     */
    // Increase velocity if jumping
    function resolveGravity() : void {
		if( ref.current > 49 ) {
			// velocity.current *= 1.1
			velocity.current += 0.5
			set( prev => prev - 0.5 * velocity.current )
		} else {
			ref.current = 49
            // velocity.current = 1
		}
    }

    return { gravity, set, ref, velocity, resolveGravity }
}