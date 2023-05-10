import { createContext, useEffect, useRef, useState } from 'react'
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
import { isCollide } from './utils'
import WatchOut from './components/WatchOut'
import WinFlag from './components/WinFlag'
import GameWon from './components/GameWon'
import useGravity from './hooks/useGravity'



// General Game Context
export const GameContext = createContext<any>(null)



function App() {

	useEffect( () => {
		document.title = 'React Mario'
	}, [])

	const speed: number = 15
	// const refreshRate: number = 50
	const gameLength: number = 8000

	// KeyPress controller -  Controls which keys are pressed
	const controller = useController()

	// Player position - Updates player position in game
	const playerPosition = usePlayerPosition()

	// Game objects - stores DOM element useRefs
	const gameObjects = useGameObjects()

	// Gravity
	const gravity = useGravity()

	// Control actions - maps actions to keypress events
	const controls = useControls({ playerPosition, gameObjects, speed, gameLength, gravity })

	// Resolve keypress - DOM keyup and keydown event listeners
	useResolveKeyPress(controller)

	// General Game Context
	const game = useGameContext({ playerPosition, gameObjects, controller })

	// Game loop
	const loopRef = useRef<number>(0) 
	const gameRef = useRef<UseGameContextInterface | null>(null)

	useEffect( () => {
		gameRef.current = game
	}, [game.playerPosition, game.isGameOver])
	
	function loop() {

		// Check for Goomba collision
		gameObjects.goombas.forEach( goomba => {
			if( isCollide( goomba.current, game.mario.current ) ) {
				game.endGame()
			}
		})

		// Check for Bullet Bill collision
		if( isCollide( gameObjects.bulletBill.current, game.mario.current ) ) {
			game.endGame()
		} 

		// Check for Win Flag collision
		if( isCollide( gameObjects.winFlag.current, game.mario.current ) ) {
			game.winGame()
		} 

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

		// Gravity
		gravity.resolveGravity()

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

					<BulletBill bulletBill={gameObjects.bulletBill} />

					<WatchOut />

				</Movable>

				<GameOver />
				<GameWon />
				<GameResetBtn />

				{/* Dev debugging */}
				<p className='absolute z-50'>
					position.x: {playerPosition.position.x} <br />
					position.y: {playerPosition.position.y} <br />
					controller.left: {controller.keys.left ? 'true' : 'false'} <br />
					controller.right: {controller.keys.right ? 'true' : 'false'} <br />
					controller.up: {controller.keys.up ? 'true' : 'false'} <br />
					isGameOver: {game.isGameOver ? 'true' : 'false'} <br />
					gravity: {gravity.gravity}
				</p>

			</Game>		
		</GameContext.Provider>
	)
}

export default App
