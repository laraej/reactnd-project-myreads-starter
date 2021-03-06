import React from 'react'

class Book extends React.Component {
  constructor(props) {
    super(props)

    this.move = this.move.bind(this)
  }
  move(event) {
    this.props.onMove(this.props.book, event.target.value)
  }
  render() {
    const coverStyle = {
      width: 128,
      height: 192,
      backgroundColor: '#cccccc'
    };
    if (this.props.book.imageLinks)
      coverStyle.backgroundImage = 'url(' + this.props.book.imageLinks.thumbnail + ')'

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={ coverStyle }></div>
          <div className="book-shelf-changer">
            <select defaultValue={ this.props.shelf ? this.props.shelf : "none" } onChange={ this.move }>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ this.props.book.title }</div>
        <div className="book-authors">{ this.props.book.authors ? this.props.book.authors.join(", ") : "" }</div>
      </div>
    )
  }
}

export default Book
