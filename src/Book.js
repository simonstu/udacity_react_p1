import React, { Component } from 'react';
import PropTypes from 'prop-types'
import BookshelfChanger from './BookshelfChanger'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    changeShelf = (newShelf) => {
        this.props.onChangeShelf(newShelf)
    }

    render() {
        return (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}></div>
                <BookshelfChanger
                  shelf={this.props.book.shelf}
                  onChangeShelf={this.changeShelf} />
              </div>
              <div className="book-title">{this.props.book.title}</div>
              <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )
    }
}

export default Book