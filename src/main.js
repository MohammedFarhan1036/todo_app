import React, { Component } from 'react'
import Inputsd from './components/input';
import Tasks from "./components/tasks.js"

class Main extends Component {
    state = { name:"Arena" } 
    render() { 
        return (
            <React.Fragment>
                <Inputsd state={this.state}/>
                <div className="tasks">
                <Tasks/>
                <Tasks/>
                <Tasks/>
                <Tasks/>
                <Tasks/>
                <Tasks/>
                <Tasks/>
                <Tasks/>
                <Tasks/>
                <Tasks/>
                </div>
            </React.Fragment>

        );
    }
}
 
export default Main;