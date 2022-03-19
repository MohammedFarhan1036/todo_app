import React, { Component } from 'react'
class Register extends Component {
    state = { full_name:"",email:"",password:"",log:"" } 
    handlechange=(e)=>{
        this.setState({[e.target.name]:e.target.value})


    }
    handlesubmit=()=>{
        fetch('http://localhost:3001/register',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(this.state)
            }).then(res=>res.json()).then(user=>{if(user.email){
                console.log(user)
                this.props.profile(user);

            }
            else{
                this.setState({log:"Unable to register"})
              setTimeout(()=>{
                  this.setState({log:""})
              },2000)
            }

            })

    }
    render()
    { 
        return (
        <div className="mainform">
            <button onClick={()=>this.props.onroutechange(3)}className="btn btn-primary btn1">Log In</button>
        <div className="form">
            <p className="errorp">REGISTER FORM</p>
             <div  className="textfield"> 
            <p>ENTER FULL NAME: </p>
            <input type="text "  onChange={this.handlechange}className="input-group-text input1" name="full_name" placeholder="ENTER FULL NAME"/>
            </div>
         <div  className="textfield"> 
            <p>ENTER EMAIL: </p>
            <input type="email "  onChange={this.handlechange} className="input-group-text input1" name="email" placeholder="ENTER EMAIL"/>
        </div>
        
        <div  className="textfield"> 
            <p>ENTER PASSwORD: </p>
            <input type="text " onChange={this.handlechange} className="input-group-text input1" name="password" placeholder="ENTER PASSwORD"/>
        </div>
        <button type="button" onClick={this.handlesubmit}value="submit" className="btn btn-success m">SUBMIT</button>
        <p className="errorp">{this.state.log}</p>



        </div>
        </div>
        );
    }
}
 
export default Register;