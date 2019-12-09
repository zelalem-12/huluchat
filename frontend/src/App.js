
import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
  } from "react-router-dom";


import Home from './components/Home';
import Faq from './components/Faq';
import Image from './components/Image';   
import Download from './components/Download';
import Statistics from './components/Statistics';
import TermsAndService from './components/TermsAndServices';
import Blogs from './components/Blogs';
import footer from './components/Footer';
import Footer from "./components/Footer";
import Admin from "./components/Admin";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="header">
      <ul className="nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/faq">FAQ</NavLink></li>
        <li><NavLink to="/images">Image</NavLink></li>
        <li><NavLink to="/download">Download</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/tot">Terms of Services</NavLink></li>   
      </ul>
      </div> 
      <div className="content">
       <Route exact path="/" component={Home} />
       <Route path="/faq" component={Faq} />
       <Route path="/images" component={Image} />
       <Route path="/download" component={Download} />
       <Route path="/statistics" component={Statistics} />
       <Route path='/tot' component={TermsAndService}/>
       <Route path='/blogs' component={Blogs}/>
       <Route path ='/admin' component={Admin}/>
    </div>
     <Footer/>    
      </BrowserRouter>
    );
  }
}

export default App;
