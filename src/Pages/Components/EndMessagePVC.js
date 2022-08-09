import React from 'react'
import X from '../../Images/x.svg'
import O from '../../Images/o.svg'
import Quit from './Quit';
import NextRound from './NextRound';
export default function EndMessagePVC(props) {
  let winnerMark;
  let winnerPlayer;
  if (props.winnerMark === 'x') {
    winnerMark = X
  } else if (props.winnerMark === 'o') {
    winnerMark = O
  } else {
    winnerMark = 'tie'
  }
  if (props.winnerPlayer === 'P1') {
    winnerPlayer = 'YOU WON!'
  } else {
    winnerPlayer = "OH NO, YOU LOST..."
  }
  if(winnerMark!=='tie'){
    return (
      <div className="messagePVP">
        <p>{winnerPlayer}</p>
        <div>
          <img src={winnerMark} alt="Winner Mark" />
          <span>TAKES THE ROUND</span>
        </div>
        <div className="buttons">
          <Quit />
          <NextRound nextRound={props.nextRound} setTurn={props.setTurn}/>
        </div>
      </div>
    )
  }else{
    return (
      <div className="messagePVP" style={{padding:'67px'}}>
        <h1>ROUND TIED</h1>
        <div className="buttons">
          <Quit />
          <NextRound nextRound={props.nextRound} setTurn={props.setTurn}/>
        </div>
      </div>
    )
  }

}
