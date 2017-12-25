```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

## Reducer:
- Reducer is a function that returns a piece of the `application state`.
- Since an application can have different piece of states in the `application state`, we can have different reducers.
  - `application state` is a plain JavaScript Object.
  - normally a reducer can **produce** part of an objects
    - for example, `{book: {title: a}, activeBook: {title: a}}`
    - `Book Reducer` can **produce** `book key`'s value
      - The value of reducer is assigned to the key.
    - `ActiveBook Reducer` can **produce** the `activeBook key`'s value.
      - The value of reducer is assigned to the key.
- To Create A Reducer In An Application
  1. Create the reducer
  2. Wire the reducer into the application

## combineReducers function
- `import { combineReducers } from 'redux';`
  - const rootReducer = combineReducers({});
  - accepts an object
- A mapping(object) of state and reducer.
  - key is the name of piece of the state
  - value is the reducer itself
- When we pass the object to combineReducers, we are essentially telling Redux how to create `application state`.


