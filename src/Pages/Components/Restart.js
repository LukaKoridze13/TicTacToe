import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context'
import { useContext } from 'react'

export default function Restarter(props) {
    let cont = useContext(Context)
    let navigate = useNavigate()
    useEffect(() => {
        for (let x of document.querySelectorAll('.box')) {
            x.setAttribute('disabled', true)
        }
        return (() => {
            for (let x of document.querySelectorAll('.box')) {
                x.removeAttribute('disabled')
            }
        })
    })
    return (
        <div className="restart">
            <p>RESTART GAME?</p>
            <div className="restart__div">
                <button className="cancel" onClick={() => { props.onClick(false) }}>NO, CANCEL</button>
                <button className="yes" onClick={() => { navigate('/TicTacToe'); cont.quit() }}>YES, RESTART</button>
            </div>
        </div>
    )
}
