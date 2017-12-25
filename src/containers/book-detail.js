import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activeBook } from '../actions/index';

class BookDetail extends Component {
    render() {
        return (
            <div>
                <h3>Details for:</h3>
                <div>{this.state.book.title}</div>
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
