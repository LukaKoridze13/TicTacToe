import React, { useState } from 'react'
import Box from './Box'
export default function Area(props) {
    const [boxes,setBoxes] = useState([1,2,3,4,5,6,7,8,9])
    
  return (
    <div className="area">
        {boxes.map((box,index)=>{
            return <Box turn={props.turn} func={props.changeTurn} key={index}  unique={index+1} pusher={props.pusher}/>
        })}
    </div>
  )
}
