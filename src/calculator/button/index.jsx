import React from 'react'
import './style.css'

const Button = ({digit, style, addDigit}) => (
    <button type='button' className={`button ${style || ''}`} onClick={addDigit}>{digit}</button>
)

export default Button