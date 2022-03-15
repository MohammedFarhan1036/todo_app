import React, { Component } from 'react'
class Input1 extends Component {
    state = {  } 
    render() { 
        return (
        <div className="inputsd">
            <p>Hello Farhan</p>
            <div className="enter">
            <p>Enter Task : </p>
            <input onChange={this.props.taskchange} value={this.props.value.task}></input>
            </div>
            <button onClick={()=>this.props.onclick(2)} className='btn btn-primary btn-sm butt'>Next</button>
        </div>
        );
    }
}
 
export default Input1;