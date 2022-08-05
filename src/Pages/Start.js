import React, { useRef, useState } from 'react'
import Logo from '../Images/logo.svg'
import Xblack from '../Images/x-black.svg'
import Oblack from '../Images/o-black.svg'
import Xsilver from '../Images/x-silver.svg'
import Osilver from '../Images/o-silver.svg'
import NewGame from './Components/NewGame'
import { useNavigate } from 'react-router-dom'
export default function Start(props) {
  const [xColor, setXColor] = useState('#1A2A33')
  const [oColor, setOColor] = useState('#1A2A33')
  const [x, setX] = useState(Xsilver)
  const [o, setO] = useState(Osilver)
  const [done, setDone] = useState(false)
  const xRef = useRef()
  function clickX() {
    setXColor('#A8BFC9')
    setX(Xblack)
    setOColor('#1A2A33')
    setO(Osilver)
    props.mark('x')
    setDone(true)
  }
  function clickO() {
    setOColor('#A8BFC9')
    setO(Oblack)
    setXColor('#1A2A33')
    setX(Xsilver)
    props.mark('o')
    setDone(true)
  }
  return (
    <div className="main">
      <img src={Logo} alt="XO Logo" className="logo" />
      <div className="pick">
        <p className="pick-title">PICK PLAYER 1'S MARK</p>
        <div className="x-and-o">
          <div onClick={clickX} className="x" onMouseEnter={(e) => { if (!done) { e.target.style.backgroundColor = 'rgba(168, 191, 201, 0.05)' } }} onMouseLeave={
            (e) => { if (!done) e.target.style.backgroundColor = '#1A2A33' }} style={{ backgroundColor: xColor }} ref={xRef}>
            <img src={x} alt="X" />
          </div>
          <div onClick={clickO} onMouseEnter={(e) => { if (!done) { e.target.style.backgroundColor = 'rgba(168, 191, 201, 0.05)' } }} onMouseLeave={
            (e) => { if (!done) e.target.style.backgroundColor = '#1A2A33' }} className="o" style={{ backgroundColor: oColor }}>
            <img src={o} alt="O" />
          </div>
        </div>
        <p className="warning">REMEMBER : X GOES FIRST</p>
      </div>
      <NewGame func={props.mode} go='PlayerVsCPU' sym='cpu' text='NEW GAME (VS CPU)' shadow='#CC8B13' color='#F2B137' margin='40px' />
      <NewGame func={props.mode} go='PlayerVsPlayer' sym='pvp' text='NEW GAME  (VS PLAYER)' shadow='#118C87' color='#31C3BD' margin='20px' />
    </div>
  )
}
