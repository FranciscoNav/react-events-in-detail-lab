// Code CoordinatesButton Component Here

import React, { Component } from 'react'

// state = { 
//     coordinates:[state.clientX, state.clientY]
// }

handleClick = (event) =>{
    let arry = [event.clientX,event.clientY]
    this.props.onReceiveCoordinates(arry)
}

class CoordinatesButton extends Component {
    render() {
        return (
            <div>
                <button onCLick={this.handleClick()}></button>
            </div>
        )
    }
}

export default CoordinatesButton