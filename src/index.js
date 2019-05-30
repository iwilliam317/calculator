import React from 'react'
import ReactDOM from 'react-dom'

import Calculator from './calculator'
import * as serviceWorker from './serviceWorker'

import './style.css'

ReactDOM.render(<Calculator />, document.getElementById('root'))
serviceWorker.unregister()
