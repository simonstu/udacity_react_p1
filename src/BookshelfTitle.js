import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BookshelfTitle extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    }

    render() {
        return <h2 className="bookshelf-title">{this.props.title}</h2>
    }
}

export default BookshelfTitle