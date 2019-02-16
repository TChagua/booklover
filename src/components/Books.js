import React, { Component } from 'react';
import { Consumer } from '../context';
import Book from './common/Book';
import Loader from './Loader'
export default class Books extends Component {

  render() {
    return (
      <Consumer>
        {value => {
          const { books } = value;
          if(books===undefined) return <Loader />;
          else {
            return (
              <main className="container">
                {books.map(book => (
                    <Book key={book.id} book={book} />  
                  ))
                }
              </main>
            )
          } 
        }}
      </Consumer>
    )
  }
}
