import React, { Component } from 'react';

const Context = React.createContext();

  export class Provider extends Component {
    state = {
      books: []
    };

    componentDidMount() {
        fetch('https://www.googleapis.com/books/v1/volumes?q=a+very+short+introduction')
        .then(res => res.json())
        .then(books => {
            this.setState({ books: books.items })   
        })
        .catch(err => console.log(err))
    }
    
    render() {
      return (
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      );
    }
  }
  
  export const Consumer = Context.Consumer;