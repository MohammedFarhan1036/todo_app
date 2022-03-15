import React, { Component } from 'react'
class Input2 extends Component {
    state = {  } 
    render() { 
        return (
        <div className="inputsd">
            <p>Hello {this.props.value.name}</p>
            <div className="enter">
                <p>Enter Date : </p>
                <input type="date" onChange={this.props.datechange} placeholder='Enter Date'></input>
            </div>
            <div className="bt">
                <button onClick={()=>this.props.onclick(1)}className="btn btn-primary btn-sm butt">Previous</button>
                <button  onClick={()=>this.props.onclick(3)} className="btn btn-primary btn-sm butt">Next</button>
            </div>
        </div>
        );
    }
}
  
export default Input2;