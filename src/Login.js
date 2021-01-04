import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./App.css";
export default class Login extends Component {
    constructor(){
        super();
        this.state={
            email:"",
            emailerr:false,
            password:"",
            passworderr:false
        }
    }
    
    passwordHandler=(event)=>{
        this.setState({
            password:event.target.value
        },()=>{
            if(event.target.value.length<=8){
                this.setState({
                    passworderr:true
                })
            }else{
                this.setState({
                    passworderr:false
                })
            }
        })
    }
        emailHandler =(event)=>{
            this.setState({
                  email:event.target.value
            },()=>{
                let emailRegex = /^[a-zA-z0-9]+(\.[a-zA-Z0-9]+)*@([a-z0-9]+([a-z0-9]*)\.)[a-zA-Z]+$/gm;
                  if(emailRegex.test(this.state.email)) {
                      this.setState({
                          emailerr: false
                      })
                  } else {
                      this.setState({
                          emailerr: true
                      })
                  }
            })
        }
        login=(event)=>{
          event.preventDefault();
            if(this.state.email&&this.state.password){
              let Data=({  "email":this.state.email,
                "password":this.state.password
              })
            }else{
              alert("Please fill the all fields");
            }
        }
    render() {
        return (
            <div>
            <div className="login">
         <div className="lg">Log in</div> 
         <div className="choice">or log in with email</div>
         <form onSubmit={this.login}>
           <div className="form-group">
            <input type="text" className="form-control inpt" placeholder="Your Email" value={this.state.email} onChange={this.emailHandler}></input>
            <div>{this.state.emailerr&& <span style={{color:"red"}}>Please enter the valid email</span>}</div>
           </div>
           <div className="form-group">
            <input type="password" className="form-control inpt" placeholder="Password" value={this.state.password} onChange={this.passwordHandler}></input>
            <div>{this.state.passworderr&& <span style={{color:"red"}}>Password must be 8 characters length</span>}</div>           
           </div>
           <Link to="/Home">
           <div> <button className="btn btn-secondary text-white btn-block inpt">Login</button></div>
           </Link>    
         </form>
         <div className="fpass"><a href="#">Forgot your password?</a></div>
        </div>       
        </div>
        )
    }
}
