import { useRef, MutableRefObject } from "react"

export interface UseGameObjects {
	ground 	   : gameObject,
	bulletBill : gameObject,
	winFlag    : gameObject,
	sky        : gameObject,
	mario      : gameObject,
	camera 	   : gameObject,
	platforms  : {
		'level1' 	  : Platform[],
		'level2' 	  : Platform[],
		[key: string] : Platform[]
	},
	goombas : {
		'level1' 	  : gameObject[],
		'level2' 	  : gameObject[],
		[key: string] : gameObject[]
	},
	giantGoombas : {
		'level2' 	  : gameObject[],
		[key: string] : gameObject[]
	}
}

export interface Platform {
	ref		   : gameObject
	jumpHeight : number
}

export type gameObject = MutableRefObject<HTMLDivElement>


export default function useGameObjects() : UseGameObjects {
    
	const ground 	 = useRef() as gameObject
	const camera 	 = useRef() as gameObject
	const sky 		 = useRef() as gameObject
	const mario 	 = useRef() as gameObject
	const bulletBill = useRef() as gameObject
	const winFlag 	 = useRef() as gameObject

	const platforms = {

		level1: [
			{ ref : useRef() as gameObject, jumpHeight: 500 },
			{ ref : useRef() as gameObject, jumpHeight : 700 },
			{ ref : useRef() as gameObject, jumpHeight : 700 },
			{ ref : useRef() as gameObject, jumpHeight : 700 },
			{ ref : useRef() as gameObject, jumpHeight : 700 },
		] as Platform[],

		level2: [
			{ ref : useRef() as gameObject, jumpHeight: 700 },
			{ ref : useRef() as gameObject, jumpHeight : 800 },
			{ ref : useRef() as gameObject, jumpHeight : 700 },
			{ ref : useRef() as gameObject, jumpHeight : 700 },
			{ ref : useRef() as gameObject, jumpHeight : 700 },
			{ ref : useRef() as gameObject, jumpHeight : 500 }
		] as Platform[],

		level3: [
			{ ref : useRef() as gameObject, jumpHeight: 700 },
			{ ref : useRef() as gameObject, jumpHeight : 800 },
			{ ref : useRef() as gameObject, jumpHeight : 700 },
			{ ref : useRef() as gameObject, jumpHeight : 700 },
			{ ref : useRef() as gameObject, jumpHeight : 700 },
			{ ref : useRef() as gameObject, jumpHeight : 500 }
		] as Platform[],

	}
	


	const goombas = {

		level1 : [
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
		],

		level2 : [
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
		],
	}
	
	const giantGoombas = {

		level2 : [
			useRef() as gameObject,
		],

		level3 : [
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
			useRef() as gameObject,
		]
	}

    return { ground, sky, mario, camera, goombas, giantGoombas, bulletBill, winFlag, platforms }
}