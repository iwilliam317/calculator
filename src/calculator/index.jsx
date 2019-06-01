import React, {Component} from 'react'
import Button from './button'
import Display from './display'

import './style.css'

class Calculator extends Component {
    render(){
        return(
            <>
               <h1>Calculator</h1>
               <div className='calculator'>
                   <Display value={100} />
                   
                   <Button digit='AC' />
                   <Button digit='/' />
                   <Button digit='-' />
                   <Button digit='/' />

                   <Button digit={7} />
                   <Button digit={8} />
                   <Button digit={9} />
                   <Button digit='x' />

                   <Button digit={4} />
                   <Button digit={5} />
                   <Button digit={6} />
                   <Button digit='-' />

                   <Button digit={1} />
                   <Button digit={2} />
                   <Button digit={3} />
                   <Button digit='+' />
                   
                   <Button  />
                   <Button digit={0} />
                   <Button digit=',' />
                   <Button digit='=' />
               </div>
            </>

        )
    }
}

export default Calculator