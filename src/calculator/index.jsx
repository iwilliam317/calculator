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

    addDigit = event => {
        const digit = event.target.innerHTML
        let { displayValue } = this.state

        if (digit == '.' && this.state.displayValue.includes('.')) return
        displayValue = displayValue + digit
        this.setState({ displayValue })
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
                   <Button style='operator' digit='/' />

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
                   
                   <Button style='double' digit='0' />
                   <Button digit='.' click={addDigit}/>
                   <Button style='operator' digit='=' />
               </div>
            </>

        )
    }
}

export default Calculator