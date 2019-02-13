import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
//import { Router, Route, Switch } from 'react-router'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import RoutesFile from './RoutesFile';
import { FacebookProvider, ShareButton } from "react-facebook";
import { FacebookShareButton, LinkedinShareButton, WhatsappShareButton } from "react-share";
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <Link to={"/"} >Home</Link>&nbsp; &nbsp;
        <Link to={"/about"} >About</Link>
        <Switch>
          <Route path="/sitemap.xml"><RoutesFile /></Route>
          <Route path="/abt/:id"><Component2 /></Route>
          <Route path="/about"><Component2 /></Route>
          <Route path="/"><Component1 /></Route>
        </Switch>
        </header>
        <FacebookShareButton url="http://www.facebook.com">facebook</FacebookShareButton>
        <LinkedinShareButton url="http://www.facebook.com">linked in</LinkedinShareButton>
        <WhatsappShareButton url="http://www.facebook.com" title="zen3">whatsapp</WhatsappShareButton>
        <FacebookProvider appId="576088576204176">
        <ShareButton href="http://www.facebook.com">
          Share
        </ShareButton>
      </FacebookProvider>
      </div>
      </Router>
    );
  }
}

export default App;
