import React, { useState } from 'react'
import { TURNS } from './constants'
// eslint-disable-next-line react/prop-types
export function Square ({ children, isSelected, handleClick, index }) {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleTurn = () => {
    handleClick(index)
  }
  return (
    <>
      <div onClick={handleTurn} className={className} >{children}</div>
    </>
  )
}

function App () {
  const [board, setBoard] = useState(Array(9).fill(null)) // create a board of a array with 9 blank spaces
  const [turn, setTurn] = useState('x') // know who has the turn

  const handleTurn = (index) => {
    if (board[index]) return
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x // Change the turn
    setTurn(newTurn)
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {board.map((square, index) => {
          return (
            <Square handleClick={handleTurn} key={index} index={index}>
              <span>{square}</span>
            </Square>
          )
        })}
      </section>
        <section className='turn'>
          {/* give a true or false to the component */}
          <Square isSelected={TURNS.x === turn }>
            {TURNS.x}
          </Square>
          <Square isSelected={TURNS.o === turn }>
            {TURNS.o}
          </Square>
        </section>
    </main>
  )
}

export default App
