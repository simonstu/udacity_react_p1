import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class SearchBooksGrid extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        booksFound: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    changeShelf = (newShelf, book) => {
        this.props.onChangeShelf(newShelf, book)
    }

    render() {
        const {books, booksFound} = this.props;

        const booksToRender = booksFound.map(function(bookFound) {
            let bookAlreadyOnShelf = books.filter((book) => book.id === bookFound.id)
            if (bookAlreadyOnShelf.length > 0) {
                return bookAlreadyOnShelf[0]
            } else {
                return bookFound
            }
        });

        return (
            <ol className="books-grid">
                {booksToRender.map((book) => (
                  <li key={book.id}>
                    <Book
                        book={book}
                        onChangeShelf={(newShelf) => {
                            this.changeShelf(newShelf, book)
                        }}
                    />
                  </li>
                ))}
            </ol>
        )
    }
}

export default SearchBooksGrid