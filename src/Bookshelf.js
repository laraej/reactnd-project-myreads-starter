import React from 'react'

class Bookshelf extends React.Component {
  render() {
    const books = this.props.children.map((book) => <li>{ book }</li>);

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
