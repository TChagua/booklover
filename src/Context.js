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
        .then(this.state.books.map(book => book.isFavorite = false))
        .catch(err => console.log(err))
    }

    addToFavorites = (id) => {
      let item = this.state.books.find(book => book.id ===id);
      item.isFavorite = true;
    }
    
    removeFromFavorites = (id) => {
      let item = this.state.books.find(book => book.id ===id);
      item.isFavorite = false;
    }
    
    render() {
      return (
        <Context.Provider value={{
          books: this.state.books, 
          addToFavorites: this.addToFavorites,
          removeFromFavorites: this.removeFromFavorites
          }}>
          {this.props.children}
        </Context.Provider>
      );
    }
  }
  
  export const Consumer = Context.Consumer;