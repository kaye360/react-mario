import { useRef, MutableRefObject } from "react"


export interface UseGameObjects {
	ground : MutableRefObject<HTMLDivElement>,
	platforms : Platform[],
	sky : MutableRefObject<HTMLDivElement>,
	mario : MutableRefObject<HTMLDivElement>,
	movable : MutableRefObject<HTMLDivElement>,
	goombas : MutableRefObject<HTMLDivElement>[],
	bulletBill : MutableRefObject<HTMLDivElement>,
	winFlag : MutableRefObject<HTMLDivElement>,
}

export interface Platform {
	ref: MutableRefObject<HTMLDivElement>,
	jumpHeight : number
}


export default function useGameObjects() : UseGameObjects {
    
	const ground = useRef() as MutableRefObject<HTMLDivElement>
	
	const movable = useRef() as MutableRefObject<HTMLDivElement>

	const sky = useRef() as MutableRefObject<HTMLDivElement>

	const mario = useRef() as MutableRefObject<HTMLDivElement>

	const bulletBill = useRef() as MutableRefObject<HTMLDivElement>

	const winFlag = useRef() as MutableRefObject<HTMLDivElement>


	const platforms: Platform[] = [

		// Level 1 (0-4)
		{ ref: useRef() as MutableRefObject<HTMLDivElement>, jumpHeight: 500 },
		{ ref: useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 700 },
		{ ref : useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 700 },
		{ ref : useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 700 },
		{ ref : useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 700 },

		// Level 2 (5-9)
		{ ref: useRef() as MutableRefObject<HTMLDivElement>, jumpHeight: 700 },
		{ ref: useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 800 },
		{ ref : useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 700 },
		{ ref : useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 700 },
		{ ref : useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 700 },
		{ ref : useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 500 }
	]


	const goombas = [

		// Level 1 (0-11)
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
		useRef() as MutableRefObject<HTMLDivElement>,

		// Level 2 (12-24)
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
		useRef() as MutableRefObject<HTMLDivElement>,
		useRef() as MutableRefObject<HTMLDivElement>,
	]

    return { ground, sky, mario, movable, goombas, bulletBill, winFlag, platforms }
}