import React, {Component} from 'react'
import Button from './button'
import Display from './display'

import './style.css'

const initialState = {
    displayValue: '0',
    shouldClear: false,
    operation: null,
    values: [0,0],
    current: 0
}

class Calculator extends Component {

    state = { ...initialState }

    _onlyOneDot = (digit, values) => {
        return digit == '.' && values.includes('.')
    }

    _shouldClearDisplay = (value, flag) => {
        return value === '0' || flag
    }
    addDigit = event => {
        let { displayValue, clearDisplay } = this.state
        const digit = event.target.innerHTML

        if (this._onlyOneDot(digit, displayValue)) return
        
        clearDisplay = this._shouldClearDisplay(displayValue, clearDisplay)
        
        const currentValue = clearDisplay ? '' : displayValue
      
        displayValue = currentValue + digit

        this.setState({ displayValue, clearDisplay: false  })
        
        if(digit !== '.'){
            const i = this.state.current
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
        const {clearDisplay, addDigit} = this
        return(
            <>
               <h1>Calculator</h1>
               <div className='calculator'>
                   <Display value={displayValue} />
                   
                   <Button style='operator' digit='AC' click={clearDisplay}/>
                   <Button style='operator' digit='/' />
                   <Button style='operator' digit='-' />
                   <Button style='operator' />

                   <Button digit='7' click={addDigit}/>
                   <Button digit='8' click={addDigit} />
                   <Button digit='9' click={addDigit} />
                   <Button style='operator' digit='x' />

                   <Button digit='4' click={addDigit} />
                   <Button digit='5' click={addDigit} />
                   <Button digit='6' click={addDigit} />
                   <Button style='operator' digit='-' />

                   <Button digit='1' click={addDigit} />
                   <Button digit='2' click={addDigit} />
                   <Button digit='3' click={addDigit} />
                   <Button style='operator' digit='+' />
                   
                   <Button style='double' digit='0' click={addDigit} />
                   <Button digit='.' click={addDigit}/>
                   <Button style='operator' digit='=' />
               </div>
            </>

        )
    }
}

export default Calculator