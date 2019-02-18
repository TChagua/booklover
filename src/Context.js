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
        .then(this.setState(currentState => ({
          books:currentState.books.map(item => ({...item, isFavorite: false}))
        })))
        .catch(err => console.log(err))
    }

    toggleFavorite = (id) => {
      this.setState(currentState => ({
        books: currentState.books.map(item => item.id === id ? ({...item, isFavorite: !item.isFavorite}) : item)
      }))
    }
    
    
    render() {
      return (
        <Context.Provider value={{
          books: this.state.books, 
          toggleFavorite: this.toggleFavorite
          }}>
          {this.props.children}
        </Context.Provider>
      );
    }
  }
  
  export const Consumer = Context.Consumer;