import React from 'react'
import './style.css'

const Button = ({digit, style }) => (
    <button type='button' className={`button ${style}`}>{digit}</button>
)

export default Button