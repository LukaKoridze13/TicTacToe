import React from 'react'

export default function Stats(props) {
  return (
    <div className="stats" style={{backgroundColor: props.color}}>
        <p>{props.who}</p>
        <span>{props.point}</span>
    </div>
  )
}
