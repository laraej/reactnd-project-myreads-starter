import React from 'react'
import MoveToOption from './MoveToOption.js'

class Book extends React.Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + this.props.book.imageLinks.thumbnail + ')' }}></div>
          <div className="book-shelf-changer">
            <select defaultValue={ this.props.book.shelf }>
              <option value="move" disabled>Move to...</option>
              <MoveToOption id="currentlyReading" book={ this.props.book } title="Currently Reading" />
              <MoveToOption id="wantToRead" book={ this.props.book } title="Want to Read" />
              <MoveToOption id="read" book={ this.props.book } title="Read" />
              <MoveToOption id="none" book={ this.props.book } title="None" />
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
