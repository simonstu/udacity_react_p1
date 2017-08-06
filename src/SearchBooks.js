import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchBooksResults from './SearchBooksResults'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    state = {
        booksFound: [],
        query: '',
    }

    changeShelf = (newShelf, book) => {
        this.props.onChangeShelf(newShelf, book)
    }

    updateQuery = (query) => {
        if (query.trim().length > 0) {
            BooksAPI.search(query.trim(), 100).then((booksFound) => {
              if (Object.prototype.toString.call( booksFound ) === '[object Array]') {
                this.setState({ booksFound })
              } else {
                this.setState({ booksFound:[] })
              }
            })
        } else {
            this.setState({ booksFound:[] })
        }
        this.setState({ query: query.trim() })
    }

    render() {
        const {books} = this.props

        return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                    />
              </div>
            </div>
            <SearchBooksResults
                books={books}
                booksFound={this.state.booksFound}
                onChangeShelf={this.changeShelf} />
          </div>
        )
    }
}

export default SearchBooks