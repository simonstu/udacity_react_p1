import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBooksGrid from './SearchBooksGrid'

class SearchBooksResults extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        booksFound: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    changeShelf = (newShelf, book) => {
        this.props.onChangeShelf(newShelf, book)
    }

    render() {
        return (
            <div className="search-books-results">
              <SearchBooksGrid
                books={this.props.books}
                booksFound={this.props.booksFound}
                onChangeShelf={this.changeShelf} />
            </div>
        )
    }
}

export default SearchBooksResults