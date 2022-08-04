import React, { useEffect, useState } from 'react'
import Logo from '../Images/logo.svg'
import SilverX from '../Images/x-silver.svg'
import SilverO from '../Images/o-silver.svg'
import Restart from '../Images/restart.svg'
import Area from './Components/Area'
import Stats from './Components/Stats'
export default function VsPlayer() {
  let conditions = [[1, 2, 3], [1, 5, 9], [1, 4, 7], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9]]
  const [turn, setTurn] = useState('x');
  const [scoreX, setScoreX] = useState(0)
  const [scoreO, setScoreO] = useState(0)
  const [scoreTies, setScoreTies] = useState(0)
  const [xId, setxID] = useState([])
  const [oId, setoID] = useState([])
  const [xWin, setXWin] = useState(false)
  const [oWin, setOWin] = useState(false)
  const [tie,setTie] = useState(false)
  useEffect(() => {
    conditions.map((item)=>{
      let x = 0;
      item.map((item)=>{
        if(xId.includes(item)){
          x++;
        }
      })
      if(x===3){
        setXWin(true)
        setScoreX(scoreX+1)
        console.log('x won')
      }
    })
    conditions.map((item)=>{
      let o = 0;
      item.map((item)=>{
        if(oId.includes(item)){
          o++;
        }
      })
      if(o===3){
        setOWin(true)
        setScoreO(scoreO+1)
        console.log('o won')

      }
    })
    if((!oWin && !xWin)&& (xId.length===5)){
      setTie(true)
      setScoreTies(scoreTies+1)
      console.log('tie')

    }
  },[turn])
  function pusher(x, y) {
    if (x === 'x') {
      xId.push(y)
      setxID(xId)
    } else {
      oId.push(y)
      setoID(oId)
    }
    console.log(xId, oId)
  }
  function changeTurn() {
    if (turn === 'x') {
      setTurn('o')
    } else {
      setTurn('x')
    }
  }
  return (
    <section className='vs-player'>
      <header>
        <img src={Logo} alt="Logo" />
        <div className="turn">
          {turn === 'x' ? <img src={SilverX} alt="Silver X" /> : <img src={SilverO} alt="SilverO" />}
          <p>TURN</p>
        </div>
        <button className="reset">
          <img src={Restart} alt="Restart" />
        </button>
      </header>
      <Area turn={turn} changeTurn={changeTurn} pusher={pusher} />
      <footer>
        <Stats who='X (P1)' point={scoreX} color='#31C3BD' />
        <Stats who='Ties' point={scoreO} color='#A8BFC9' />
        <Stats who='O (P2)' point={scoreTies} color='#F2B137' />
      </footer>
    </section>
  )
}
