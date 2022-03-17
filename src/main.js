import React, { Component } from 'react'
import Inputsd from './components/input';
import Tasks from "./components/tasks.js";
import Register from "./components/register.js"

class Main extends Component {
    state = { name:"Arena",
                count:2
}
onroutechange=(e)=>{
    this.setState({count:e})
}
renderthis=()=>{
    switch(this.state.count){
        case 1:return(<React.Fragment>
            <Inputsd state={this.state}/>
            <div className="tasks">
            <Tasks/>
            </div>
            </React.Fragment>
         )
         case 2:return <Register onroutechange={this.onroutechange}/>
    }

}
    render() { 
        return (
            this.renderthis()

        );
    }
}
 
export default Main;