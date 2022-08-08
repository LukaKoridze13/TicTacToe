import React, { useEffect } from 'react'
import { Context } from '../../Context';
import { useContext } from 'react';
export default function NextRound(props) {
  let cont=useContext(Context)
  useEffect(()=>{
    for(let x of document.querySelectorAll('.box')){
      x.style.pointerEvents='none'
    }
  })
  function next(){
    for(let x of document.querySelectorAll('.box')){
      x.classList.remove('xBackground')
      x.classList.remove('oBackground')
      x.style.pointerEvents='all'
    }
  }
  return (
    <button className="nextRound" onClick={()=>{props.nextRound(); next(); props.setTurn('x')}}>
        NEXT ROUND
    </button>
  )
}
