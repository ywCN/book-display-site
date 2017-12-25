import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activeBook } from '../actions/index';

class BookDetail extends Component {
    render() {
        return (
            <div>Book Detail!</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook // activeBook is from index. activeBook: ActiveBook
    };
}

export default connect(mapStateToProps)(BookDetail);
