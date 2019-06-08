import React, {Component} from 'react'
import Button from './button'
import Display from './display'

import './style.css'

class Calculator extends Component {

    state = { currentValue: 0 }

    addDigit = event => {
        const currentValue = this.state.currentValue + event.target.innerHTML
        this.setState({ currentValue })
    }

    clearDisplay = () => {
        console.log('asd');
        
        this.setState({...this.state, currentValue: 0})
    }

    render(){
        const {currentValue} = this.state
        const {clearDisplay, addDigit} = this
        return(
            <>
               <h1>Calculator</h1>
               <div className='calculator'>
                   <Display value={currentValue} />
                   
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
                   <Button digit=',' />
                   <Button style='operator' digit='=' />
               </div>
            </>

        )
    }
}

export default Calculator