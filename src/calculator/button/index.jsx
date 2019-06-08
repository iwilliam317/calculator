import React from 'react'
import './style.css'

const Button = ({digit, style, click}) => (
    <button type='button' className={`button ${style || ''}`} onClick={click}>{digit}</button>
)

export default Button