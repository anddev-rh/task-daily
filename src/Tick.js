import React from 'react'

export function Tick () {
  
  const date = new Date().toLocaleTimeString()
  
  
  return (
    <div>
      <h1>Hello Wold</h1>
      <h2>It is {date}.</h2>
    </div>
  )
}


