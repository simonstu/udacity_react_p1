import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

class SearchBooksResults extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    changeShelf = (newShelf, bookID) => {
        this.props.onChangeShelf(newShelf, bookID)
    }

    render() {
        return (
            <div className="search-books-results">
              <BooksGrid
                books={this.props.books}
                shelf="none"
                onChangeShelf={this.changeShelf} />
            </div>
        )
    }
}

export default SearchBooksResults