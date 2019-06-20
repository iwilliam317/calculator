import React, {Component} from 'react'
import Button from './button'
import Display from './display'

import './style.css'

const initialState = {
    displayValue: '0',
    shouldClear: false,
    operation: null,
    values: [0,0],
    currentIndex: 0
}

const RESET_VALUE = 0

class Calculator extends Component {

    state = { ...initialState }

    _checkDot = (digit, values) => {
        return digit == '.' && values.includes('.')
    }

    _canClearDisplay = (value, flag) => {
        return value === '0' || flag
    }

    setOperation = event => {
        const operation = event.target.innerHTML
        const {currentIndex} = this.state        
        if(currentIndex === 0) {
            this.setState({operation, currentIndex: 1, clearDisplay: true})
        }
        else {
            const currentOperation = this.state.operation
            const values =  [...this.state.values]

            values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            values[1] = RESET_VALUE

            this.setState({displayValue: values[0]})
        }
    }
    addDigit = event => {
        let { displayValue, clearDisplay } = this.state
        const digit = event.target.innerHTML

        if (this._checkDot(digit, displayValue)) return
        
        clearDisplay = this._canClearDisplay(displayValue, clearDisplay)
        
        const currentValue = clearDisplay ? '' : displayValue
      
        displayValue = currentValue + digit

        this.setState({ displayValue, clearDisplay: false  })
        
        if(digit !== '.'){
            const i = this.state.currentIndex
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
            console.log(values)
        }

    }

    clearDisplay = () => {
        this.setState({...initialState})
    }

    render(){
        const {displayValue} = this.state
        const {clearDisplay, addDigit, setOperation} = this
        return(
            <>
               <h1>Calculator</h1>
               <div className='calculator'>
                   <Display value={displayValue} />
                   
                   <Button style='operator' digit='AC' click={clearDisplay} />
                   <Button style='operator' digit='/' click={setOperation} />
                   <Button style='operator' digit='-' click={setOperation} />
                   <Button style='operator' />

                   <Button digit='7' click={addDigit}/>
                   <Button digit='8' click={addDigit} />
                   <Button digit='9' click={addDigit} />
                   <Button style='operator' digit='*' click={setOperation} />

                   <Button digit='4' click={addDigit} />
                   <Button digit='5' click={addDigit} />
                   <Button digit='6' click={addDigit} />
                   <Button style='operator' digit='-' click={setOperation} />

                   <Button digit='1' click={addDigit} />
                   <Button digit='2' click={addDigit} />
                   <Button digit='3' click={addDigit} />
                   <Button style='operator' digit='+' click={setOperation} />
                   
                   <Button style='double' digit='0' click={addDigit} />
                   <Button digit='.' click={addDigit}/>
                   <Button style='operator' digit='=' click={setOperation} />
               </div>
            </>

        )
    }
}

export default Calculator