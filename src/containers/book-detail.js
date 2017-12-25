import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activeBook } from '../actions/index';

class BookDetail extends Component {
    render() {
        if (!this.props.book) { //return early to aviod null.title
            return <div>Please select a book.</div>;
        }
        return (
            <div>
                <h3>Details for:</h3>
                <div>{this.props.book.title}</div>
                <div>{this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook // activeBook is from index. activeBook: ActiveBook
    };
}

export default connect(mapStateToProps)(BookDetail);
