import React, { Component } from 'react'
class Input1 extends Component {
    state = {  } 
    render() { 
        return (
        <div className="inputsd">
            <button onClick={()=>this.props.onrouteschange(3)} className='btn btn-primary btn-sm butt'>Sign Out</button>

            <p>Hello {this.props.value.name}</p>
            <div className="enter">
            <p>Enter Task: </p>
            <input onChange={this.props.taskchange} value={this.props.value.task}></input>
            </div>
            <button onClick={()=>this.props.onclick(2)} className='btn btn-primary btn-sm butt'>Next</button>
        </div>
        );
    }
}
 
export default Input1;