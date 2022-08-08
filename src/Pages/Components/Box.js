import React, { useEffect, useRef, useState, useContext } from 'react'
import OutlineX from '../../Images/x-outline.svg'
import OutlineO from '../../Images/o-outline.svg'
import X from '../../Images/x.svg'
import O from '../../Images/o.svg'
import { Context } from '../../Context';
import { logRoles } from '@testing-library/react'
import { click } from '@testing-library/user-event/dist/click'

export default function Box(props) {
    function click(e) {
        e.target.classList.remove('hovx')
        e.target.classList.remove('hovo')
        if (props.turn === 'x') {
            e.target.classList.add('xBackground')
        } else {
            e.target.classList.add('oBackground')
        }
        props.pusher(props.turn, props.unique)
        props.func()
        props.check()
    }
    function moveIn(e) {
        if (!e.target.classList.contains('xbackground') && !e.target.classList.contains('xbackground')) {
            if (props.turn === 'x') {
                e.target.classList.add('hovx')
            } else {
                e.target.classList.add('hovo')
            }
        }
    }
    function moveOut(e) {
        if (!e.target.classList.contains('xbackground') && !e.target.classList.contains('xbackground')) {
            e.target.classList.remove('hovx')
            e.target.classList.remove('hovo')
        }
    }
    return (
        <div className="box" onClick={(e) => { click(e) }} onMouseOver={(e) => { moveIn(e) }} onMouseLeave={(e) => { moveOut(e) }}>

        </div>
    )
}
