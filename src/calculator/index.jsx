import React, {Component} from 'react'
import Button from './button'
import Display from './display'

import './style.css'

class Calculator extends Component {
    state = { currentValue: 0}
    addDigit = event => {
        const currentValue = this.state.currentValue + event.target.innerHTML
        this.setState({ currentValue })
    }

    render(){
        const {currentValue} = this.state
        return(
            <>
               <h1>Calculator</h1>
               <div className='calculator'>
                   <Display value={currentValue} />
                   
                   <Button style='operator' digit='AC' />
                   <Button style='operator' digit='/' />
                   <Button style='operator' digit='-' />
                   <Button style='operator' digit='/' />

                   <Button digit='7' addDigit={this.addDigit}/>
                   <Button digit='8' addDigit={this.addDigit} />
                   <Button digit='9' addDigit={this.addDigit} />
                   <Button style='operator' digit='x' addDigit={this.addDigit} />

                   <Button digit='4' addDigit={this.addDigit} />
                   <Button digit='5' addDigit={this.addDigit} />
                   <Button digit='6' addDigit={this.addDigit} />
                   <Button style='operator' digit='-' />

                   <Button digit='1' addDigit={this.addDigit} />
                   <Button digit='2' addDigit={this.addDigit} />
                   <Button digit='3' addDigit={this.addDigit} />
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