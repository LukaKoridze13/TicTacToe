import React, { useEffect, useRef, useState } from 'react'
import OutlineX from '../../Images/x-outline.svg'
import OutlineO from '../../Images/o-outline.svg'
import X from '../../Images/x.svg'
import O from '../../Images/o.svg'
export default function Box(props) {
    const [hover,setHover] = useState(OutlineX)
    const [src,setSrc] = useState('')
    const [done, setDone] = useState(false)
    let ref = useRef()
    function draw(){
        if(props.turn === 'x'){
            setSrc(X)
        }else{
            setSrc(O)
        }
    }
    useEffect(()=>{
        if(props.turn==='x'){
            setHover(OutlineX)
        }else{
            setHover(OutlineO)
        }
    })
  return (
    <button ref={ref} className="box" onMouseEnter={()=>{if(!done){setSrc(hover)}}} onMouseLeave={()=>{if(!done){setSrc('')}}} onClick={(e)=>{if(!done){draw(); props.pusher(props.turn,props.unique); setDone(true);props.func() }}}>
        <img src={src}  />
    </button>
  )
}
