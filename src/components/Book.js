import React, { Component } from 'react'
import {Consumer} from '../Context';
export default class Book extends Component {
  render() {
    return (
        <Consumer>
        {value => {
                const {books} = value;
            return(
            <div>
                <img src={books.imageLinks.thumbnail} />
                <h1>{books.title} by {books.authors}</h1>
                <p>{books.description}</p>
            </div>
        
        )
    }}
        </Consumer>

    )
  }
}
