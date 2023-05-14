import { useRef, MutableRefObject } from "react"


export interface UseGameObjects {
	ground : MutableRefObject<HTMLDivElement>,
	bulletBill : MutableRefObject<HTMLDivElement>,
	winFlag : MutableRefObject<HTMLDivElement>,
	sky : MutableRefObject<HTMLDivElement>,
	mario : MutableRefObject<HTMLDivElement>,
	movable : MutableRefObject<HTMLDivElement>,
	platforms : {
		'level1': Platform[],
		'level2' : Platform[],
		[key: string] : Platform[]
	},
	goombas : {
		'level1' : MutableRefObject<HTMLDivElement>[],
		'level2' : MutableRefObject<HTMLDivElement>[],
		[key: string] : MutableRefObject<HTMLDivElement>[]
	},
	giantGoombas : {
		'level2' : MutableRefObject<HTMLDivElement>[],
		[key: string] : MutableRefObject<HTMLDivElement>[]
	}
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


	const platforms = {

		level1: [
			{ ref: useRef() as MutableRefObject<HTMLDivElement>, jumpHeight: 500 },
			{ ref: useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 700 },
			{ ref : useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 700 },
			{ ref : useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 700 },
			{ ref : useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 700 },
		] as Platform[],

		level2: [
			{ ref: useRef() as MutableRefObject<HTMLDivElement>, jumpHeight: 700 },
			{ ref: useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 800 },
			{ ref : useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 700 },
			{ ref : useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 700 },
			{ ref : useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 700 },
			{ ref : useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 500 }
		] as Platform[],

		level3: [
			{ ref: useRef() as MutableRefObject<HTMLDivElement>, jumpHeight: 700 },
			{ ref: useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 800 },
			{ ref : useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 700 },
			{ ref : useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 700 },
			{ ref : useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 700 },
			{ ref : useRef() as MutableRefObject<HTMLDivElement>, jumpHeight : 500 }
		] as Platform[],

	}
	


	const goombas = {

		level1 : [
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
		],

		level2 : [
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
		],
	}
	
	const giantGoombas = {

		level2 : [
			useRef() as MutableRefObject<HTMLDivElement>,
		],

		level3 : [
			useRef() as MutableRefObject<HTMLDivElement>,
			useRef() as MutableRefObject<HTMLDivElement>,
			useRef() as MutableRefObject<HTMLDivElement>,
			useRef() as MutableRefObject<HTMLDivElement>,
			useRef() as MutableRefObject<HTMLDivElement>,
		]
	}

    return { ground, sky, mario, movable, goombas, giantGoombas, bulletBill, winFlag, platforms }
}