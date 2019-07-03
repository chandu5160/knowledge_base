import React, { Component } from "react";
import { Link,Redirect } from "react-router-dom";
import "../../css/login&register.css";
import img1 from "../../images/img-01.png";
import { Alert } from "reactstrap";
import Tilt from 'react-tilt';

class SignInForm extends Component {
  state = {
    email: "",
    password: "",
    message: null,
    Profile:''
  };
  // componentWillMount(){
  //   const data =localStorage.getItem('data');
   
  //  this.setState({
  //    Profile : data
  //  });
  // }

  // It Fired when change in input 
  handleChange = e => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  };

  // Submit Form
  submitForm = e => {
    e.preventDefault();
    if(this.state.email==='user@gmail.com' && this.state.password==='user@123')
    {
      
                
                // localStorage.setItem('data',this.state.email);
                // this.props.history.push("/index");
    }
    else{
      this.setState({
               message: "Please enter all fields and valid credential"
      })
    }
  };
  render() {

    return (
      <div className="appDiv">
        <div className="SignIn_SignUpDiv">
          <div className="Image" >
          <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
          <div className="Tilt-inner">
            <img src={img1} alt="No_image" />
            </div>
            </Tilt>
          </div>
          <div className="formClass">
            <span className="title">Sign In</span>
           {this.state.message ? (
              <Alert className="errorMessage"  >{this.state.message}</Alert>
            ) : (
              ""
            )}
            {/* Email */}
            <div className="inputDiv">
              <input
                className="Input"
                type="email"
                id="email"
                placeholder="Enter your email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <span className="Input-input100" />
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
            </div>

            {/* password */}
            <div className="inputDiv">
              <input
                className="Input"
                type="password"
                id="password"
                placeholder="Enter your password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <span className="Input-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>

            {/* submit button */}
            <div className="inputDiv">
              <button  className="Inputbtn" onClick={this.submitForm}>
                Sign In
              </button>
            </div>
            <div className="inputDiv">
              <div className="link">
              <Link  to="/">New user? Register here</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
            
  }
}

export default SignInForm;

