import { createContext, useEffect, useRef } from 'react'
import useController from './hooks/useController'
import useResolveKeyPress from './hooks/useResolveKeyPress'
import usePlayerPosition from './hooks/usePlayerPosition'
import useGameObjects from './hooks/useGameObjects'
import Game from './components/Game'
import Sky from './components/Sky'
import Ground from './components/Ground'
import Mario from './components/Mario'
import useControls from './hooks/useControls'
import Goomba from './components/Goomba'
import Movable from './components/Movable'
import useGameContext, { UseGameContextInterface } from './hooks/useGameContext'
import GameOver from './components/GameOver'
import GameResetBtn from './components/GameResetBtn'
import BulletBill from './components/BulletBill'
import WatchOut from './components/WatchOut'
import WinFlag from './components/WinFlag'
import GameWon from './components/GameWon'
import useGravity from './hooks/useGravity'
import Platform from './components/Platform'
import useCollision from './hooks/useCollision'



// General Game Context
export const GameContext = createContext<any>(null)



function App() {

	useEffect( () => {
		document.title = 'React Mario'
	}, [])

	const speed: number = 15

	const gameLength: number = 8000

	const maxJumpHeight = useRef(300)

	// KeyPress controller -  Controls which keys are pressed
	const controller = useController()

	// Player position - Updates player position in game
	const playerPosition = usePlayerPosition()

	// Game objects - stores DOM element useRefs
	const gameObjects = useGameObjects()

	// Gravity
	const gravity = useGravity()

	// General Game Context
	const game = useGameContext({ playerPosition, gameObjects, controller })
	
	// Control actions - maps actions to keypress events
	const controls = useControls({ playerPosition, gameObjects, speed, gameLength, maxJumpHeight, gravity })

	// Resolve keypress - DOM keyup and keydown event listeners
	useResolveKeyPress(controller)



	// Game loop
	const loopRef = useRef<number>(0) 
	const gameRef = useRef<UseGameContextInterface | null>(null)

	useEffect( () => {
		gameRef.current = game
	}, [game.playerPosition, game.isGameOver])

	
	function loop() {

		useCollision({ gameObjects, game, gravity, maxJumpHeight })

		// Controls
		if( !gameRef.current?.isGameOver && !gameRef.current?.isGameWon ) {

			if( controller.controllerRef.current.right ) {
				controls.move('right')
			}
	
			if( controller.controllerRef.current.left ) {
				controls.move('left')
			}
	
			if( controller.controllerRef.current.up ) {
				controls.move('up')
			}
		}

		// Loop
		loopRef.current = requestAnimationFrame(loop)
	}

	useEffect( () => {
		loopRef.current = requestAnimationFrame(loop)
		return () => { cancelAnimationFrame(loopRef.current) }
	}, [] )

	

	return (
		<GameContext.Provider value={game}>
			<Game>
				<Mario mario={gameObjects.mario} gravity={gravity.ref.current}/>

				<Sky   sky={gameObjects.sky} />

				<Movable movable={gameObjects.movable} style={{}}>

					<WinFlag winFlag={gameObjects.winFlag} />

					<Ground ground={gameObjects.ground} />

					<Platform platform={gameObjects.platforms[0].ref} positionX={1500} positionY={49} type="pipe"/>
					<Platform platform={gameObjects.platforms[1].ref} positionX={3500} positionY={250} />
					<Platform platform={gameObjects.platforms[2].ref} positionX={3900} positionY={400} />
					<Platform platform={gameObjects.platforms[3].ref} positionX={5000} positionY={400} />
					<Platform platform={gameObjects.platforms[4].ref} positionX={6100} positionY={400} />

					<Goomba goomba={gameObjects.goombas[0]} id="1" position={700} />
					<Goomba goomba={gameObjects.goombas[1]} id="2" position={1400} />
					<Goomba goomba={gameObjects.goombas[2]} id="3" position={2500} />
					<Goomba goomba={gameObjects.goombas[3]} id="4" position={2700} />
					<Goomba goomba={gameObjects.goombas[4]} id="5" position={3500} />
					<Goomba goomba={gameObjects.goombas[5]} id="6" position={4500} />
					<Goomba goomba={gameObjects.goombas[6]} id="7" position={4500} />
					<Goomba goomba={gameObjects.goombas[7]} id="8" position={4500} />
					<Goomba goomba={gameObjects.goombas[8]} id="9" position={6200} />
					<Goomba goomba={gameObjects.goombas[9]} id="10" position={6500} />
					<Goomba goomba={gameObjects.goombas[10]} id="11" position={6800} />
					<Goomba goomba={gameObjects.goombas[11]} id="12" position={7500} />

					<BulletBill bulletBill={gameObjects.bulletBill} />

					<WatchOut />

				</Movable>

				<GameOver />
				<GameWon />
				<GameResetBtn />

				{/* Dev debugging */}
				{/* <p className='absolute z-50'>
					position.x: {playerPosition.position.x} <br />
					position.y: {playerPosition.position.y} <br />
					controller.left: {controller.keys.left ? 'true' : 'false'} <br />
					controller.right: {controller.keys.right ? 'true' : 'false'} <br />
					controller.up: {controller.keys.up ? 'true' : 'false'} <br />
					isGameOver: {game.isGameOver ? 'true' : 'false'} <br />
					gravity: {gravity.gravity}<br />
					velocity: {gravity.velocity.current}
				</p> */}

			</Game>		
		</GameContext.Provider>
	)
}

export default App
