import React, { Component } from 'react'
import Loader from './Loader'
export default class Details extends Component {
    state = {
        book: null
    };
    
    componentDidMount() {
      fetch('https://www.googleapis.com/books/v1/volumes/'+ this.props.match.params.id)
      .then(res => res.json())
      .then(book => {
          this.setState({ book: book.volumeInfo})
      })
    }
  render() {
    const {book} = this.state;
    if (book===null) return <Loader />
    return book && (
      <main className="details">
        <img src={book.imageLinks.small || book.imageLinks.thumbnail} alt="book-cover"/>
        <section className="book-info">
            <h2>{book.title}</h2>
            <h3>by {book.authors}</h3>
            <p>{book.description}</p>
        </section>
        <section className="publication-info">
            <hr/>
            <p><strong>Publisher: </strong> {book.publisher}</p>
            <p><strong>Publication Date: </strong> {book.publishedDate}</p>
            <p><strong>Pages: </strong> {book.printedPageCount}</p>
        </section>   
      </main>
    )
  }
}