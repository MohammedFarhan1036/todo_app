import React, { Component } from 'react'
import Task from './task.js'
class Tasks extends Component {
    constructor(props){
        super(props)
        this.state={ 
            
        }
    }
  
    render()
    {      
        return (
        <div className="tasks">
            
            <ul className="ul">{this.props.list.map(task=><li><Task details={task}/></li>)}</ul>
            

        </div>
        );
    }
}
 
export default Tasks;