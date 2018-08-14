import React from 'react'

class Book extends React.Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url(' + this.props.imageUrl + ')' }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading" selected={ this.props.shelf === "currentlyReading" }>Currently Reading</option>
              <option value="wantToRead" selected={ this.props.shelf === "wantToRead" }>Want to Read</option>
              <option value="read" selected={ this.props.shelf === "read" }>Read</option>
              <option value="none" selected={ this.props.shelf === "none" }>None</option>
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
