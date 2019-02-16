import React, { Component } from 'react';
import './App.css';
import {Provider} from './Context';
import Books from './components/Books'

class App extends Component {
  state = {
    books: null,
  }
  render() {
    return (
      <Provider value={{
        books:this.state.books
      }}>
        <div className="App">
          <Books />
        </div>
      </Provider>
      
    );
  }
}

export default App;
