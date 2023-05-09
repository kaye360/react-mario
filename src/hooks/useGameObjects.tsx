import { useRef, MutableRefObject } from "react"


export interface UseGameObjects {
	ground : MutableRefObject<HTMLDivElement>,
	sky : MutableRefObject<HTMLDivElement>,
	mario : MutableRefObject<HTMLDivElement>,
	movable : MutableRefObject<HTMLDivElement>,
	goombas : MutableRefObject<HTMLDivElement>[],
	bulletBill : MutableRefObject<HTMLDivElement>,
	winFlag : MutableRefObject<HTMLDivElement>,
}


export default function useGameObjects() : UseGameObjects {
    
	const ground = useRef() as MutableRefObject<HTMLDivElement>

	const movable = useRef() as MutableRefObject<HTMLDivElement>

	const sky = useRef() as MutableRefObject<HTMLDivElement>

	const mario = useRef() as MutableRefObject<HTMLDivElement>

	const goombas = [
		useRef() as MutableRefObject<HTMLDivElement>,
		useRef() as MutableRefObject<HTMLDivElement>,
		useRef() as MutableRefObject<HTMLDivElement>,
		useRef() as MutableRefObject<HTMLDivElement>,
		useRef() as MutableRefObject<HTMLDivElement>,
		useRef() as MutableRefObject<HTMLDivElement>,
		useRef() as MutableRefObject<HTMLDivElement>,
		useRef() as MutableRefObject<HTMLDivElement>,
		useRef() as MutableRefObject<HTMLDivElement>,
		useRef() as MutableRefObject<HTMLDivElement>,
		useRef() as MutableRefObject<HTMLDivElement>,
	]

	const bulletBill = useRef() as MutableRefObject<HTMLDivElement>

	const winFlag = useRef() as MutableRefObject<HTMLDivElement>

    return { ground, sky, mario, movable, goombas, bulletBill, winFlag }
}