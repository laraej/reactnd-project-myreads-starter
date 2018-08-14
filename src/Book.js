import React from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends React.Component {
  constructor(props) {
    super(props)

    this.move = this.move.bind(this)
  }
  move(event) {
    BooksAPI.update(this.props.book, event.target.value)
  }
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + this.props.book.imageLinks.thumbnail + ')' }}></div>
          <div className="book-shelf-changer">
            <select defaultValue={ this.props.book.shelf } onChange={ this.move }>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ this.props.book.title }</div>
        <div className="book-authors">{ this.props.book.authors.join(", ") }</div>
      </div>
    )
  }
}

export default Book
