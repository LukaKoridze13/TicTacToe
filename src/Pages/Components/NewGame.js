import React from 'react'

export default function NewGame(props) {
    let shadow= `inset 0px -8px 0px ${props.shadow}`
  return (
    <button onClick={()=>{props.func(props.sym)}} className='newGameBTN' style={{backgroundColor: props.color,boxShadow:shadow, marginTop: props.margin}}>
        {props.text}
    </button>
  )
}
