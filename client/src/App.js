import React,{Component} from 'react';
import './App.css';
import SignInForm from "./components/login&register/login";
import SignUpForm from "./components/login&register/register";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
  render(){
    return (
      <div className="App">
       <BrowserRouter>
       <SignInForm/>
       <SignUpForm/>
       </BrowserRouter>
       
      </div>
    );
  }

}

export default App;
