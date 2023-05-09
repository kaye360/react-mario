import { useState, useRef, useEffect, Dispatch } from "react"

interface position {
    x: number,
    y: number
}

export interface UsePlayerPosition {
    position : position,
    setPosition : Dispatch<React.SetStateAction<position>>,
    playerPosRef : React.MutableRefObject<position>
}

export default function usePlayerPosition() : UsePlayerPosition {

	const [position, setPosition] = useState<position>({x: 0, y: 0})
	
	const playerPosRef = useRef(position)

	useEffect( () => {
		playerPosRef.current = position	
	}, [position])


    return { position, setPosition, playerPosRef }
}