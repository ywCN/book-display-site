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
                <li
                    key={book.title}
                    className="list-group-item"
                    onClick={() => this.props.selectBook(book)}
                >
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

// Anything returned from this function will end up as props
// on the BookList container.
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should
    // be passed to all of our reducers.
    // actions will flow throught dispatch function and
    // spit them out to all the different reducers in our app
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// export the container
// connnect promotes BookList from a component to a container
// it needs to know about this new dispatch method, selectBook.
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
