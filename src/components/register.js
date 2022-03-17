import React, { Component } from 'react'
class Register extends Component {
    state = {  } 
    render()
    { 
        return (
        <div className="mainform">
        <div className="form">
             <div  class="textfield"> 
            <p>ENTER FULL NAME: </p>
            <input type="text "  class="input-group-text input1" name="full_name" placeholder="ENTER FULL NAME"/>
            </div>
         <div  class="textfield"> 
            <p>ENTER EMAIL: </p>
            <input type="email "  class="input-group-text input1" name="email" placeholder="ENTER EMAIL"/>
        </div>
        
        <div  class="textfield"> 
            <p>ENTER PASSwORD: </p>
            <input type="text "  class="input-group-text input1" name="full_name" placeholder="ENTER PASSwORD"/>
        </div>
        <button type="button" value="submit" class="btn btn-success m">SUBMIT</button>


        </div>
        </div>
        );
    }
}
 
export default Register;