import React from 'react'
// eslint-disable-next-line react/prop-types
export function Square ({ children, isSelected, handleClick, index }) {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleTurn = () => {
    handleClick(index)
  }
  return (
      <>
        <div onClick={handleTurn} className={className}>
          {children}
        </div>
      </>
  )
}
