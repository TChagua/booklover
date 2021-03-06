import React, { Component } from 'react';
import { Consumer } from '../context';
import Book from './common/Book';
import Loader from './Loader'
export default class Books extends Component {
  
  render() {
    return (
      <Consumer>
        {value => {
          const { books, toggleFavorite} = value;
          if(books===undefined) return <Loader />;
          else {
            return (
              <main className="container">
              {this.props.match.path.endsWith('favorites') ? 
              books.filter(book => book.isFavorite ===true).map(book => {
                return <Book 
                  key={book.id} 
                  book={book} 
                  toggleFavorite={toggleFavorite} 
                  />
              }) : 
                books.map(book => {
                  return <Book 
                  key={book.id} 
                  book={book} 
                  toggleFavorite={toggleFavorite} 
                  />  
                })
                }
              </main>
            )
          } 
        }}
      </Consumer>
    )
  }
}
