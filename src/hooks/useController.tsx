import { useState, useRef, useEffect, SetStateAction, Dispatch, MutableRefObject } from "react"

export interface Keys {
    left : boolean,
    right : boolean,
    up : boolean
}

export interface UseController {
    keys : Keys,
    setKeys : Dispatch<SetStateAction<Keys>>,
    controllerRef: MutableRefObject<Keys>
}

export default function useController() : UseController {

    const [keys, setKeys] = useState<Keys>({
		left: false, 
		right: false,
		up: false
	})

    const controllerRef = useRef<Keys>(keys)

    useEffect( () => {
		controllerRef.current = keys
	}, [keys])

    return { keys, setKeys, controllerRef }
}