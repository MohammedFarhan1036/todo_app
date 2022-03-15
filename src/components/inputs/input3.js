import React, { Component } from 'react'
class Input3 extends Component {
    state = {  } 
    render()
    { 
        return (
        <div className="inputsd">
            <p>Hello {this.props.value.name} </p>
        </div>
        );
    }
}
 
export default Input3;