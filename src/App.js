import React, { Component } from 'react';
import { Provider } from './context';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from './components/Books';
import Header from './components/Header';
import Footer from './components/Footer';
import Details from './components/Details'
import "./styles/main.css";


export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Books} />
            <Route exact path="/favorites" component={Books} />
            <Route exact path="/details/:id" component={Details} />
            <Footer />
          </div> 
        </Router>
      </Provider>
    )
  }
}
