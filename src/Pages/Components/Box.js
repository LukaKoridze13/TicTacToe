import React, { useEffect, useRef, useState, useContext } from 'react'
import OutlineX from '../../Images/x-outline.svg'
import OutlineO from '../../Images/o-outline.svg'
import X from '../../Images/x.svg'
import O from '../../Images/o.svg'
import { Context } from '../../Context';
import { logRoles } from '@testing-library/react'

export default function Box(props) {
    const [hover, setHover] = useState(OutlineX)
    const [src, setSrc] = useState('')
    let cont = useContext(Context)

    let ref = useRef()
    function draw() {
        if (props.turn === 'x') {
            setSrc(X)
        } else {
            setSrc(O)
        }
    }
    function disable(e) {
        draw();
        props.pusher(props.turn, props.unique);
        props.func();
        e.target.setAttribute('disabled', true);
    }
    useEffect(() => {
        if (props.turn === 'x') {
            setHover(OutlineX)
        } else {
            setHover(OutlineO)
        }
    })
    return (
        <button ref={ref} className="box" onMouseEnter={(e) => { if (!ref.current.disabled) { setSrc(hover) } }} onMouseLeave={(e) => { if (!ref.current.disabled) { setSrc('') } }} onClick={(e) => { disable(e) }} style={{backgroundImage:`url(${src})`}}>
        </button>
    )
}
