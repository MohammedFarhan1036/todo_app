import React, { Component } from 'react'

import Main2 from "./main2.js";
import Register from "./components/register.js"
import Login from "./components/login.js"

class Main extends Component {
    state = { name:"",
                count:2,
                email:"",
                tasks:[]
                
    }
    profile=(e)=>{

        this.setState({name:e.full_name,email:e.email},()=>{fetch('http://localhost:3001/tasks',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email:this.state.email})
            }).then(res=>res.json()).then(task=>{
                task.forEach(e=>{
                let tasks=[...this.state.tasks]
                tasks=[...tasks,e]
                this.setState({tasks})
                this.renderthis()
            }) 
            this.setState({count:1}) 
        })})
               
    }
    
    
            

onroutechange=(e)=>{
    this.setState({count:e})
}
onrouteschange=(e)=>{
    this.setState({count:e,name:"",
    email:"",
    tasks:[]})
}
renderthis=()=>{
    switch(this.state.count){
        case 1:return <Main2   onrouteschange={this.onrouteschange} state={this.state}/>
         case 2:return <Register profile={this.profile} onroutechange={this.onroutechange}/>
         case 3:return <Login  onroutechange={this.onroutechange} profile={this.profile}/>
    }

}
    render() { 
        return (
            this.renderthis()

        );
    }
}
 
export default Main;