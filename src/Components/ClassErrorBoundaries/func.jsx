import React from 'react'
import { useEffect } from 'react'

function Func({heroname}) {
  if(heroname==="Joker") {
    throw new Error("Not a hero")
  }
  return (
    <div>{heroname}</div>
  )
}

export default Func