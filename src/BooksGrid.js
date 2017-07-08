import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class BooksGrid extends Component {
    static propTypes = {
        shelf: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    changeShelf = (newShelf, bookID) => {
        this.props.onChangeShelf(newShelf, bookID)
    }

    render() {
        const {shelf, books} = this.props

        return (
            <ol className="books-grid">
                {books.filter((book) => book.shelf === shelf).map((book) => (
                  <li key={book.id}>
                    <Book
                        book={book}
                        onChangeShelf={(newShelf) => {
                            this.changeShelf(newShelf, book.id)
                        }}
                    />
                  </li>
                ))}
            </ol>
        )
    }
}

export default BooksGrid