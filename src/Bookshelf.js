import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookshelfTitle from './BookshelfTitle'
import BooksGrid from './BooksGrid'


class Bookshelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        shelf: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    changeShelf = (newShelf, book) => {
        this.props.onChangeShelf(newShelf, book)
    }

    render() {
        const {title, shelf, books} = this.props

        return (
            <div className="bookshelf">
                <BookshelfTitle title={title} />
                <div className="bookshelf-books">
                    <BooksGrid
                        books={books}
                        shelf={shelf}
                        onChangeShelf={this.changeShelf} />
                </div>
            </div>
        )
    }
}

export default Bookshelf