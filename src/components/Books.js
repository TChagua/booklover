import React, { Component } from 'react';
import Book from './Book';
import { Consumer } from '../Context';

export default class Books extends Component {
    state = {
        books:null
    }
    
    componentDidMount() {
        fetch('https://www.googleapis.com/books/v1/volumes?q=a+novel+of+discworld')
            .then(res => res.json())
            .then(books => {
                this.setState({ books: books.items.volumeInfo })
            })
            console.log(this.state)
            .catch(err => console.log(err))
    }
  render() {
    return  !!this.state.books && (
      <Consumer>
            {value => {
                const {books} = value;
                return(
                    <div>
                    {books.map(book => (
                        <div key={book.id} className="info" style={{border:"2px solid seagreen", padding:"10px", margin:"10px", width:"400px"}}>
                            <Book book={book}/>
                        </div>
                    ))
                    }
                </div>
                )
            }}
                
        </Consumer>
          
        )
    }
}


