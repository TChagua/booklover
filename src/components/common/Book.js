import React, {Component} from 'react'
import {Link } from "react-router-dom";
import Heart from './Heart'

export default class Book extends Component {
  state = {
    checked: false
 };
 handleCheckBox =(e) =>{
    this.setState({
      checked: e.target.checked
    })
  }
  render() {
    const {book} = this.props;
    return (
      <article className="book">
        <img src={book.volumeInfo.imageLinks.thumbnail} alt="book-cover"/> 
        <div>
          <h2>{book.volumeInfo.title}</h2> 
          <h3>by {book.volumeInfo.authors}</h3>
        </div>
        <Heart checked={this.state.checked} handleCheckBox={this.handleCheckBox}/>
        <p>{book.volumeInfo.description}</p> 
        <span><Link to={"/details/"+book.id}>read more >></Link></span>
      </article>
    )
  }
}



