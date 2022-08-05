import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context';
export default function NewGame(props) {
    let shadow= `inset 0px -8px 0px ${props.shadow}`
    let navigate =  useNavigate()
    let cont=useContext(Context)
    if(cont.mark!=='x' && cont.mark!=='o'){
      return (
        <button onClick={()=>{props.func(props.sym); navigate(props.go) }} className='newGameBTN' style={{backgroundColor: props.color,boxShadow:shadow, marginTop: props.margin}} disabled>
            {props.text}
        </button>
      )
    }else{
      return (
        <button onClick={()=>{props.func(props.sym); navigate(props.go) }} className='newGameBTN' style={{backgroundColor: props.color,boxShadow:shadow, marginTop: props.margin}}>
            {props.text}
        </button>
      )
    }
  
}
