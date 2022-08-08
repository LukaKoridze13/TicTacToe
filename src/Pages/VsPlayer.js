import React, { useEffect, useState } from 'react'
import Logo from '../Images/logo.svg'
import SilverX from '../Images/x-silver.svg'
import SilverO from '../Images/o-silver.svg'
import Restart from '../Images/restart.svg'
import Area from './Components/Area'
import Stats from './Components/Stats'
import EndMessagePVP from './Components/EndMessagePVP'
import { render } from '@testing-library/react'
import Restarter from './Components/Restart'
export default function VsPlayer(props) {
  let conditions = [[1, 2, 3], [1, 5, 9], [1, 4, 7], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9]]
  const [turn, setTurn] = useState('x');
  const [scoreX, setScoreX] = useState(0)
  const [scoreO, setScoreO] = useState(0)
  const [scoreTies, setScoreTies] = useState(0)
  const [xId, setxID] = useState([])
  const [oId, setoID] = useState([])
  const [xWin, setXWin] = useState(false)
  const [oWin, setOWin] = useState(false)
  const [tie, setTie] = useState(false)
  const [round, setRound] = useState([false, null, null])
  const [restart,setRestart] =  useState(false)

  let playerOne;
  let playerTwo;
  if (props.player1 === 'x') {
    playerOne = 'P1'
    playerTwo = 'P2'
  } else {
    playerOne = 'P2'
    playerTwo = 'P1'
  }
  function check() {
    let shouldReturn = false;
    conditions.map((item) => {
      let x = 0;
      item.map((item) => {
        if (xId.includes(item)) {
          x++;
        }
      })
      if (x === 3) {
        setXWin(true)
        setScoreX(scoreX + 1)
        setRound([true, 'x', playerOne])
        setxID([])
        setoID([])
        shouldReturn=true;
      }
    })
    if(shouldReturn){return shouldReturn}
    conditions.map((item) => {
      let o = 0;
      item.map((item) => {
        if (oId.includes(item)) {
          o++;
        }
      })
      if (o === 3) {

        setOWin(true)
        setScoreO(scoreO + 1)
        setRound([true, 'o', playerTwo])
        setxID([])
        setoID([])
        shouldReturn=true;
      }
    })
    if(shouldReturn){return shouldReturn}

    if ((!oWin && !xWin) && (xId.length === 5 && oId.length === 4)) {
      console.log('test')
      setTie(true)
      setScoreTies(scoreTies + 1)
      setRound([true, 'tie', 'ROUND TIED'])
      setxID([])
      setoID([])
    }
  }
  function pusher(x, y) {
    if (x === 'x') {
      xId.push(y)
      setxID(xId)
    } else {
      oId.push(y)
      setoID(oId)
    }
  }
  function changeTurn() {
    if (turn === 'x') {
      setTurn('o')
    } else {
      setTurn('x')
    }
  }
  function nextRound() {
    setRound([false, null, null])
    setOWin(false)
    setXWin(false)
  }
  return (
    <section className='vs-player' style={{ position: 'relative' }}>
      <header>
        <img src={Logo} alt="Logo" />
        <div className="turn">
          {turn === 'x' ? <img src={SilverX} alt="Silver X" /> : <img src={SilverO} alt="SilverO" />}
          <p>TURN</p>
        </div>
        <button className="reset" onClick={()=>{setRestart(true)}}>
          <img src={Restart} alt="Restart" />
        </button>
      </header>
      <Area turn={turn} changeTurn={changeTurn} pusher={pusher} check={check} />
      <footer>
        <Stats who={`X (${playerOne})`} point={scoreX} color='#31C3BD' />
        <Stats who='Ties' point={scoreTies} color='#A8BFC9' />
        <Stats who={`O (${playerTwo})`} point={scoreO} color='#F2B137' />
      </footer>
      {round[0] && <EndMessagePVP winnerMark={round[1]} winnerPlayer={round[2]} nextRound={nextRound} setTurn={setTurn} />}
      {restart && <Restarter onClick={setRestart} nextRound={nextRound} setTurn={setTurn}/>}
    </section>
  )
}
