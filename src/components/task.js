import React, { Component } from 'react'
class Task extends Component {
    state={
        task:this.props.details
       
    }
    
    

    render()
    {      
        return (
        <div className="task">
            <p>{this.props.details.task}</p>
            
            

        </div>
        );
    }
}
 
export default Task;