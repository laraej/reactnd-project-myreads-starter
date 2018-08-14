import React from 'react'
import MoveToOption from './MoveToOption.js'

class Book extends React.Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + this.props.book.imageLinks.thumbnail + ')' }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <MoveToOption id="currentlyReading" shelf={ this.props.book.shelf } title="Currently Reading" />
              <MoveToOption id="wantToRead" shelf={ this.props.book.shelf } title="Want to Read" />
              <MoveToOption id="read" shelf={ this.props.book.shelf } title="Read" />
              <MoveToOption id="none" shelf={ this.props.book.shelf } title="None" />
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
