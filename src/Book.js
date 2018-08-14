import React from 'react'
import MoveToOption from './MoveToOption.js'

class Book extends React.Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + this.props.imageUrl + ')' }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <MoveToOption id="currentlyReading" shelf={ this.props.shelf } title="Currently Reading" />
              <MoveToOption id="wantToRead" shelf={ this.props.shelf } title="Want to Read" />
              <MoveToOption id="read" shelf={ this.props.shelf } title="Read" />
              <MoveToOption id="none" shelf={ this.props.shelf } title="None" />
            </select>
          </div>
        </div>
        <div className="book-title">{ this.props.title }</div>
        <div className="book-authors">{ this.props.authors.join(", ") }</div>
      </div>
    )
  }
}

export default Book
