// state argument is not application state, 
// only the piece of state the reducer is responsible for
export default function(state = null, action) {
    // state = null is ES6 sytax.
    // It creates a default null. Note: undefined is not allowed for reducer.
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}