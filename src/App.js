import React from 'react'
import Book from './Book.js'
import Bookshelf from './Bookshelf.js'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    searchResults: [],
    shelves: {},
  }
  constructor(props) {
    super(props)

    this.search = this.search.bind(this)
    this.onBookMove = this.onBookMove.bind(this)

    BooksAPI.getAll().then((books) => {
      this.setState((prevState, props) => {
        const shelves = {}

        for (const book of books)
          shelves[book.id] = book.shelf

        return {books: books, shelves: shelves}
      })
    })
  }
  onBookMove(book, shelf) {
    this.setState((prevState, props) => {
      const shelves = {}

      shelves[book.id] = shelf

      return {shelves: Object.assign(prevState.shelves, shelves)}
    })

    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState((prevState, props) => {
          return {books: books}
        })
      })
    })
  }
  search(event) {
    BooksAPI.search(event.target.value).then((searchResults) => {
      this.setState((prevState, props) => {
        return {searchResults: Array.isArray(searchResults) ? searchResults : []}
      })
    })
  }
  render() {
    const searchResults = this.state.searchResults.map((book) => (
      <li key={ book.id }>
        <Book book={ book } shelf={ this.state.shelves[book.id] } onMove={ this.onBookMove } />
      </li>
    ));

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={ this.search } />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                { searchResults }
              </ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf title="Currently Reading" id="currentlyReading" books={ this.state.books } shelves={ this.state.shelves } onBookMove={ this.onBookMove } />
                <Bookshelf title="Want to Read" id="wantToRead" books={ this.state.books } shelves={ this.state.shelves } onBookMove={ this.onBookMove } />
                <Bookshelf title="Read" id="read" books={ this.state.books } shelves={ this.state.shelves } onBookMove={ this.onBookMove } />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true, searchResults: [] })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
