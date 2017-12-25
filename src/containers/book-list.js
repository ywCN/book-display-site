import React, { Component } from 'react';
import { connect } from 'react-redux';
// bindActionCreator is a function that can make sure that
// the action is created by the action creator actually ends up
// flowing through all the different reducers
import { bindActionCreators } from 'redux'; 
// produced value by action creators will be 
// distrubuted to reducers by bindActionCreator
import { selectBook } from '../actions/index'; 

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        // console.log(this.props.miemiemie); // ->123
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        // miemiemie: 123

        // this.props.books
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// export the container, not BookList
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
