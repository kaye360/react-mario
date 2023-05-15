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

    // Increase velocity if jumping
    function resolveGravity() : void {
		if( gravity > 49 ) {
            setVelocityWithinBounds()            
			set( prev => prev - 0.5 * velocity.current )
		} else {
            console.log('LT 49')
			ref.current = 49
            velocity.current = 1
		}
    }

    function setVelocityWithinBounds() {

        if( velocity.current < 1 ) {
            velocity.current = 1
            return
        }

        if( velocity.current > 50 ) {
            velocity.current = 50
            return
        }

        velocity.current *= 1.1
    }

    return { gravity, set, ref, velocity, resolveGravity }
}