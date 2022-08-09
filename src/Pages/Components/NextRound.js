import React, { useEffect } from 'react'
import { Context } from '../../Context';
import { useContext } from 'react';
import X from '../../Images/x.svg'
import O from '../../Images/o.svg'
export default function NextRound(props) {
  let cont=useContext(Context)
  useEffect(()=>{
    if(document.querySelectorAll('.box')[0].classList.contains('xBackground') && document.querySelectorAll('.box')[0].classList.contains('oBackground')){
      document.querySelectorAll('.box')[0].classList.remove('oBackground')
    }
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
