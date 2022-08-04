import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NewGame(props) {
    let shadow= `inset 0px -8px 0px ${props.shadow}`
    let navigate =  useNavigate()
  return (
    <button onClick={()=>{props.func(props.sym); navigate(props.go) }} className='newGameBTN' style={{backgroundColor: props.color,boxShadow:shadow, marginTop: props.margin}}>
        {props.text}
    </button>
  )
}
