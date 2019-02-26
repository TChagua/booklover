import React, {Component} from 'react'
import {Link } from "react-router-dom";


export default class Book extends Component {
  
 handleCheckBox = (callback, id) => {
    return callback(id);
  }

  render() {
    const {book, toggleFavorite} = this.props;
    return (
      <article className="book">
        <img src={book.volumeInfo.imageLinks.thumbnail} alt="book-cover"/> 
        <div>
          <h2>{book.volumeInfo.title}</h2> 
          <h3>by {book.volumeInfo.authors}</h3>
        </div>
        <label className="heart-toggle-label">
          <input type="checkbox" className="heart-toggle" 
          onChange={() => this.handleCheckBox(toggleFavorite, book.id)}/>
          <i className={(book.isFavorite) ? 'fas fa-heart red' : 'fas fa-heart'}></i>
        </label> 
        <p>{book.volumeInfo.description}</p> 
        <span><Link to={"/details/"+book.id}>read more >></Link></span>
      </article>
    )
  }
}



