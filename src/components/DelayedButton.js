// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component {
    
    setTimeout = () =>{
        this.props.delay
    }
    
    render() {
        return (
            <div>
                <button onClick={this.props.onDelayedClick(setTimeout)}></button>
            </div>
        )
    }
}

export default DelayedButton