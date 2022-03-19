import React, { Component } from 'react'
import Input1 from './inputs/input1'
import Input2 from './inputs/input2'
import Input3 from './inputs/input3'

class Inputsd extends Component {
    constructor(props){
        super(props)
        this.state={task:"",
        count:1,
        date:"",
        name:this.props.state.name
        }
    }
     
     onclick=(c)=>{
         this.setState({count:c})
         console.log(this.state)
         this.render()
     }
     ontaskchange=(e)=>{
        this.setState({task:e.target.value})
    
     }
    ondatechange=(e)=>{
        console.log("hello")
            this.setState({date:e.target.value});
            console.log(this.state.date)
        }
       
    
     render=()=>{
        switch(this.state.count){
            case 1:return(<Input1  onrouteschange={this.props.onrouteschange} onclick={this.onclick} value={this.state} taskchange={this.ontaskchange}/>)
            case 2:return(<Input2  onclick={this.onclick}  value={this.state} datechange={this.ondatechange}/>)
            case 3:return(<Input3 value={this.state} />)
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