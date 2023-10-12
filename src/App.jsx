import React, { useState } from 'react'
import { TURNS } from './constants'
// eslint-disable-next-line react/prop-types
export function Square ({ children, isSelected }) {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  return (
    <>
      <div className={className} >{children}</div>
    </>
  )
}

function App () {
  const [board, setBoard] = useState(Array(9).fill(null)) // create a board of a array with 9 blank spaces
  const [turn, setTurs] = useState('x') // know who has the turn

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {board.map((square, index) => {
          return (
            <Square key={index}>
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
