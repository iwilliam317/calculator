import React, {Component} from 'react'
import Button from './button'
import './style.css'

class Calculator extends Component {
    render(){
        return(
            <>
               <h1>Calculator</h1>
               <div className='calculator'>
                   <Button digit={1} />
                   <Button digit={1} />
                   <Button digit={1} />
                   <Button digit={1} />
                   <Button digit={1} />
                   <Button digit={1} />
                   <Button digit={1} />
                   <Button digit={1} />
                   <Button digit={1} />
               </div>
            </>

        )
    }
}

export default Calculator