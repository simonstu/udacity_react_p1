import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: []
  }

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
          this.setState({ books })
      })
  }

  assignNewShelf = (book, newShelf, bookID) => {
      console.log(newShelf)
      return book
  }

  addBookToShelf(book) {
      this.setState(state => ({
          books: state.books.concat([ book ])
      }))
  }

  changeShelf = (newShelf, book) => {
      BooksAPI.update(book, newShelf).then(() => {
          book.shelf = newShelf

          // Filter out the book and append it to the end of the list
          // so it appears at the end of whatever shelf it was added to.
          this.setState(state => ({
            books: state.books.filter(b => b.id !== book.id).concat([ book ])
          }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchBooks
            books={this.state.books}
            onChangeShelf={this.changeShelf} />
        )}/>

        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf
                  title="Currently Reading"
                  books={this.state.books}
                  shelf='currentlyReading'
                  onChangeShelf={this.changeShelf}
                />
                <Bookshelf
                  title="Want to Read"
                  books={this.state.books}
                  shelf='wantToRead'
                  onChangeShelf={this.changeShelf}
                />
                <Bookshelf
                  title="Read"
                  books={this.state.books}
                  shelf='read'
                  onChangeShelf={this.changeShelf}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
      )}/>
    </div>
  )}
}

export default BooksApp
