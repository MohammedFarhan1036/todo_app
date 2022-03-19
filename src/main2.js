import React, { Component } from 'react'
import Inputsd from './components/input.js';
import Tasks from "./components/tasks.js";
class Main2 extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
    
          
       renderthis=()=>{
           return( <div>
           <Inputsd   onrouteschange={this.props.onrouteschange}state={this.props.state}/>
           <Tasks list={this.props.state.tasks}/>
                </div>
           )
       }             
                 
  
    render(){
    return( this.renderthis());
}
}
 
export default Main2;