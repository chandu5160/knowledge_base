import React, { Component } from "react";
import { Link,Redirect } from "react-router-dom";
import "../../css/login&register.css";
import img1 from "../../images/img-01.png";
// import axios from "axios";
import { Alert } from "reactstrap";
import Tilt from 'react-tilt';


class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    password: "",
    message: null,
    Profile:'',
    Auth:''
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
    this.props.history.push("/");

  };

   //Name validation

   nameValidation = () => {
    var pattern = /^[a-zA-Z ]*$/;
    var name = this.state.name;
    if (!name) {
      this.setState({
        message: "Please enter name",
        Auth: false
      });
    }
    else if (!pattern.test(name)) {
      this.setState({
        message: "Please enter valid name(only alphabets)",
        Auth: false
      });

    }
    else {
      this.setState({
        message: "",
        Auth: true
      });
    }
  }

  //validation for email
  emailValidation = () => {
    var pattern =/^\w+([.-]?\w+)+@\w+([:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
    var email = this.state.email;
    if (!email) {
      this.setState({
        message: "Please enter email",
        Auth: false
      });
    }
    else if (!pattern.test(email)) {
      this.setState({
        message: "Please enter email like aneesha@gmail.com",
        Auth: false
      });
    }
    else {
      this.setState({
        message: "",
        Auth: true
      });
    }
  }
  //Phone Number Validation
  phoneValidation = () => {
    var pattern = /^[0-9]{10}$/;
    var phone = this.state.phone;
    if (!phone) {
      this.setState({
        message: "Please enter phone number",
        Auth: false
      });
    }
    else if (!(pattern.test(phone))) {
      this.setState({
        message: "Phone only numbers and 10digits",
        Auth: false
      });
    }
    else {
      this.setState({
        message: "",
        Auth: true
      });
    }

  }
  //Password validation
  passwordValidation = () => {
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    var password = this.state.password;
    if (!password) {
      this.setState({
        message: "Please enter Password",
        Auth: false
      });
    }
    else if (!pattern.test(password)) {
      this.setState({
        message: "Password length minimum 8",
        Auth: false
      });
    }
    else {
      this.setState({
        message: "",
        Auth: true
      });
    }
  }        
  render() {
   
    return (
      <form onSubmit={this.submitForm}>
      <div className="appDiv">
        <div className="SignIn_SignUpDiv">
          <div className="Image" data-tilt>
          <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
          <div className="Tilt-inner">
            <img src={img1} alt="No_image" />
            </div>
            </Tilt>
          </div>
          <div className="formClass">
            <span className="title">Sign Up</span>
           {this.state.message ? (
              <Alert  className="errorMessage" >{this.state.message}</Alert>
            ) : (
              ""
            )}
            {/* Name */}
            <div className="inputDiv">
              <input
                className="Input"
                type="text"
                id="name"
                placeholder="Enter your Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                onBlur={this.nameValidation}
              />
              <span className="Input-input100" />
              <span className="symbol-input100">
                <i className="fa fa-user" aria-hidden="true" />
              </span>
            </div>

            {/* Email */}
            <div className="inputDiv">
              <input
                className="Input"
                type="email"
                id="email"
                placeholder="Enter your Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                onBlur={this.emailValidation}
              />
              <span className="Input-input100" />
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
            </div>

            {/* Phone */}
            <div className="inputDiv">
              <input
                className="Input"
                type="text"
                id="phone"
                placeholder="Enter your Phone"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                onBlur={this.phoneValidation}
              />
              <span className="Input-input100" />
              <span className="symbol-input100">
                <i className="fa fa-phone" aria-hidden="true" />
              </span>
            </div>

            {/* password */}
            <div className="inputDiv">
              <input
                className="Input"
                type="password"
                id="password"
                placeholder="Enter your Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                onBlur={this.passwordValidation}
              />
              <span className="Input-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>

            {/* button */}
            <div className="inputDiv  ">
              <button type="submit" className="Inputbtn">
                Sign Up
              </button>
             
            </div>
            <div className="link">
              <Link to="/">I'm already member</Link>
              </div>
          </div>
        </div>
      </div>
      </form>
    );        
  }
}

export default SignUpForm;


