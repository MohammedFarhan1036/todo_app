import React, { Component } from 'react'
import Input1 from './inputs/input1'
import Input2 from './inputs/input2'
import Input3 from './inputs/input3'

class Inputsd extends Component {
    state = { 
        task:"",
        count:1,
        date:""
     } 
     onclick=(c)=>{
         console.log(c)
         console.log(this.state.count);
         this.setState({count:c})
         console.log(this.state.count);
         this.render()
     }
     ontaskchange=(e)=>{
        this.setState({task:e.target.value})
        console.log(this.state.task)
     }
    ondatechange=(e)=>{
        console.log("hello")
            this.setState({date:e.target.value});
            console.log(this.state.date)
        }
    
     render=()=>{
        switch(this.state.count){
            case 1:return(<Input1 onclick={this.onclick} value={this.state} taskchange={this.ontaskchange}/>)
            case 2:return(<Input2  onclick={this.onclick} datechange={this.ondatechange}/>)
            case 3:return(<Input3 count={this.state.count}/>)
        }
    }
    
    render(){
    
    return (
            <div>
            {this.render()}
            </div>
        );
        
    
}
}
 
export default Inputsd;