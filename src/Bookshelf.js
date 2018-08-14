import React from 'react'
import Book from './Book.js'

class Bookshelf extends React.Component {
  render() {
    const books = this.props.books.filter((book) => book.shelf === this.props.id)
        .map((book) => (
          <li key={ book.id }>
            <Book book={ book } />
          </li>
        ))

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books }
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
