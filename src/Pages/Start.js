import React, { useState } from 'react'
import Logo from '../Images/logo.svg'
import Xblack from '../Images/x-black.svg'
import Oblack from '../Images/o-black.svg'
import Xsilver from '../Images/x-silver.svg'
import Osilver from '../Images/o-silver.svg'
import NewGame from './Components/NewGame'
export default function Start(props) {
  const [xColor, setXColor] = useState('rgba(168, 191, 201, 0.05)')
  const [oColor, setOColor] = useState('rgba(168, 191, 201, 0.05)')
  const [x,setX] = useState(Xsilver)
  const [o,setO] = useState(Osilver)
  function clickX(){
    setXColor('#A8BFC9')
    setX(Xblack)
    setOColor('rgba(168, 191, 201, 0.05)')
    setO(Osilver)
    props.mark('x')
  }
  function clickO(){
    setOColor('#A8BFC9')
    setO(Oblack)
    setXColor('rgba(168, 191, 201, 0.05)')
    setX(Xsilver)
    props.mark('y')
  }
  return (
    <div className="main">
      <img src={Logo} alt="XO Logo" className="logo" />
      <div className="pick">
        <p className="pick-title">PICK PLAYER 1'S MARK</p>
        <div className="x-and-o">
          <div onClick={clickX} className="x" style={{ backgroundColor: xColor }}>
            <img src={x} alt="X" />
          </div>
          <div onClick={clickO} className="o" style={{ backgroundColor: oColor }}>
            <img src={o} alt="O" />
          </div>
        </div>
        <p className="warning">REMEMBER : X GOES FIRST</p>
      </div>
      <NewGame func={props.mode} sym='cpu' text='NEW GAME (VS CPU)' shadow='#CC8B13' color='#FFC860' margin='40px'/>
      <NewGame func={props.mode} sym='pvp' text='NEW GAME  (VS PLAYER)' shadow='#118C87' color='#65E9E4' margin='20px'/>
    </div>
  )
}
