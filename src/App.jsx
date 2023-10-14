import React, { useState } from 'react'
import { TURNS } from './components/constants'
import { checkForWinner, checkEndGame } from './components/logic'
import confetti from 'canvas-confetti'
import { Square } from './components/square'

function App () {
  const [board, setBoard] = useState(() => {
    const storageBoard = JSON.parse(localStorage.getItem('board'))
    return storageBoard || Array(9).fill(null)
  }) // create a board of a array with 9 blank spaces
  const [turn, setTurn] = useState(() => {
    const storageTurn = localStorage.getItem('turn')
    return storageTurn || 'x'
  }) // know who has the turn
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index]) return
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x // Change the turn
    setTurn(newTurn)
    // update the board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // check for winner
    const theWinner = checkForWinner(newBoard)
    setWinner(theWinner)
    if (theWinner !== null) {
      confetti()
    }

    const tie = checkEndGame(newBoard)
    if (tie) setWinner(false)

    localStorage.setItem('turn', newTurn)
    localStorage.setItem('board', JSON.stringify(newBoard))
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setWinner(null)
    setTurn('x')
    localStorage.removeItem('turn')
    localStorage.removeItem('board')
  }
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className='game'>
        {board.map((square, index) => {
          return (
            <Square handleClick={updateBoard} key={index} index={index}>
              <span>{square}</span>
            </Square>
          )
        })}
      </section>
      <section className='turn'>
        {/* give a true or false to the component */}
        <Square isSelected={TURNS.x === turn}>{TURNS.x}</Square>
        <Square isSelected={TURNS.o === turn}>{TURNS.o}</Square>
      </section>
      {winner !== null && (
        <section className='winner'>
          <article className='text'>
            <h2>{winner === false ? 'Tie' : `The winner is ${winner}`}</h2>

            <header className='win'>
              {winner && <Square>{winner}</Square>}
            </header>
            <button onClick={resetGame} className='win'>
              Play Again
            </button>
          </article>
        </section>
      )}
    </main>
  )
}

export default App
