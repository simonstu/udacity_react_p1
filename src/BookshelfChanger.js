import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BookshelfChanger extends Component {
    static propTypes = {
        shelf: PropTypes.string.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    handleChange = (e) => {
        this.props.onChangeShelf(e.target.value)
    }

    render() {
        return (
            <div className="book-shelf-changer">
              <select value={this.props.shelf} onChange={this.handleChange}>
                <option value="no" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
        )
    }
}

export default BookshelfChanger