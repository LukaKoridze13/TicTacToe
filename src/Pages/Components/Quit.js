import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {Context} from '../../Context'
export default function Quit() {
  let navigate = useNavigate()
  let cont= useContext(Context)
  return (
    <button className="quit" onClick={()=>{navigate('/TicTacToe');cont.quit()}}>
        QUIT
    </button>
  )
}
