import React, { useEffect, useState } from 'react'
import Logo from '../Images/logo.svg'
import SilverX from '../Images/x-silver.svg'
import SilverO from '../Images/o-silver.svg'
import Restart from '../Images/restart.svg'
import Area from './Components/Area'
import Stats from './Components/Stats'
import EndMessagePVC from './Components/EndMessagePVC'
import Restarter from './Components/Restart'
export default function VsCPUX(props) {
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
  const [restart, setRestart] = useState(false)
  let playerOne;
  let playerTwo;
  if (props.player1 === 'x') {
    playerOne = 'Player'
    playerTwo = 'CPU'
  } else {
    playerOne = 'CPU'
    playerTwo = 'Player'
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
        shouldReturn = true;
      }
    })
    if (shouldReturn) { return shouldReturn }
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
        shouldReturn = true;
      }
    })
    if (shouldReturn) { return shouldReturn }

    if ((!oWin && !xWin) && (xId.length === 5 && oId.length === 4)) {
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
    setxID([])
    setoID([])
  }
  useEffect(() => {
    let done = false;
    if (turn !== 'x' && oId.length<=4) {
      if (!done) {
        conditions.map((item) => {
          let first = false;
          let second = false;
          let third = false;
          let should;
          item.map((items) => {
            if (xId.includes(items)) {
              should = false;
            }
          })
          if (should !== false) {
            item.map((items, index) => {
              if (oId.includes(items) && !done) {
                if (index === 0) {
                  first = true;
                } else if (index === 1) {
                  second = true;
                } else {
                  third = true;
                }
                if (first === true && second === true) {
                  document.querySelectorAll('.box')[item[2] - 1].click();
                  console.log('gaeshva 1')
                  done = true;
                } else if (second === true && third === true) {
                  document.querySelectorAll('.box')[item[0] - 1].click();
                  console.log('gaeshva 1')

                  done = true;
                } else if (third === true && first === true) {
                  document.querySelectorAll('.box')[item[1] - 1].click();
                  done = true;
                }
              }
            })
          }
        })
      }
      if (!done) {
        conditions.map((item) => {
          let first;
          let second;
          let third;
          let should;
          item.map((items) => {
            if (oId.includes(items)) {
              should = false;
            }
          })
          if (should !== false) {
            item.map((items, index) => {
              if (xId.includes(items) && !done) {
                if (index === 0) {
                  first = true;
                } else if (index === 1) {
                  second = true;
                } else {
                  third = true;
                }
                if (first === true && second === true) {
                  document.querySelectorAll('.box')[item[2] - 1].click();
                  done = true;
                } else if (second === true && third === true) {
                  document.querySelectorAll('.box')[item[0] - 1].click();
                  done = true;
                } else if (third === true && first === true) {
                  document.querySelectorAll('.box')[item[1] - 1].click();
                  done = true;
                }
              }
            })
          }

        })
      }
      if (xId.length === 1 && !done) {
        if (!xId.includes(5)) {
          document.querySelectorAll('.box')[4].click()
          done = true;
        } else {
          document.querySelectorAll('.box')[0].click()
          done = true;
        }
      }
      if (xId.includes(1) && xId.includes(9) && !done && !oId.includes(6)) {
        document.querySelectorAll('.box')[5].click()
        done = true;
      }
      if (xId.includes(3) && xId.includes(7) && !done && !oId.includes(6)) {
        document.querySelectorAll('.box')[5].click()
        done = true;
      }
      if (xId.includes(1) && xId.includes(8) && !done && !oId.includes(7)) {
        document.querySelectorAll('.box')[6].click()
        done = true;
      }
      if (xId.includes(7) && xId.includes(6) && !done && !oId.includes(9)) {
        document.querySelectorAll('.box')[8].click()
        done = true;
      }
      if (!xId.includes(1) && !oId.includes(1) && !done) {
        document.querySelectorAll('.box')[0].click()
        done = true;
      }
      if (!xId.includes(5) && !oId.includes(5) && !done) {
        document.querySelectorAll('.box')[4].click()
        done = true;
      }
      if (!xId.includes(3) && !oId.includes(3) && !done) {
        document.querySelectorAll('.box')[2].click()
        done = true;
      }
      if (!xId.includes(2) && !oId.includes(2) && !done) {
        document.querySelectorAll('.box')[1].click()
        done = true;
      }
      if (!xId.includes(9) && !oId.includes(9) && !done) {
        document.querySelectorAll('.box')[8].click()
        done = true;
      }
      if (!xId.includes(6) && !oId.includes(6) && !done) {
        document.querySelectorAll('.box')[5].click()
        done = true;
      }
      if (!xId.includes(7) && !done && !oId.includes(7)) {
        document.querySelectorAll('.box')[6].click()
        done = true;
      }
      if (!xId.includes(8) && !done && !oId.includes(8)) {
        document.querySelectorAll('.box')[7].click()
        done = true;
      }
      if (!xId.includes(4) && !done && !oId.includes(4)) {
        document.querySelectorAll('.box')[3].click()
        done = true;
      }
    }
  })
  return (
    <section className='vs-player' style={{ position: 'relative' }}>
      <header>
        <img src={Logo} alt="Logo" />
        <div className="turn">
          {turn === 'x' ? <img src={SilverX} alt="Silver X" /> : <img src={SilverO} alt="SilverO" />}
          <p>TURN</p>
        </div>
        <button className="reset" onClick={() => { setRestart(true) }}>
          <img src={Restart} alt="Restart" />
        </button>
      </header>
      <Area turn={turn} changeTurn={changeTurn} pusher={pusher} check={check} />
      <footer>
        <Stats who={`X (Player)`} point={scoreX} color='#31C3BD' />
        <Stats who='Ties' point={scoreTies} color='#A8BFC9' />
        <Stats who={`O (CPU)`} point={scoreO} color='#F2B137' />
      </footer>
      {round[0] && <EndMessagePVC winnerMark={round[1]} winnerPlayer={round[2]} nextRound={nextRound} setTurn={setTurn}/>}
      {restart && <Restarter onClick={setRestart} nextRound={nextRound} setTurn={setTurn} />}
    </section>
  )
}
