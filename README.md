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

## `combineReducers` function
- `import { combineReducers } from 'redux';`
  - const rootReducer = combineReducers({});
  - accepts an object
- A mapping(object) of state and reducer.
  - key is the name of piece of the state
  - value is the reducer itself
- When we pass the object to combineReducers, we are essentially telling Redux how to create `application state`.

## `mapStateToProps` function
- `mapStateToProps(state)`
- **The glue between React and Redux.**
- The purpose of this function is to take our application state as an argument and whatever gets returned from here will show up as props inside the `container`.
- returns an object and whatever object is returned will be available to this component as props. 

## `connect` function
- `connect` takes a function and a component and produces a container
  - `connect(mapStateToProps)(BookList)`
    - firstly, `connect` take `mapStateToProps` as argument and returns a function
    - then, the `returned function` will take `BookList` as argument and returns a `container`


## Container
- Whenever we forge a connection between a component and redux, this connection turns that component into a container. aka `smart component`.
- a `container` is a React component that has a direct connection to the state managed by Redux.
- a `container` is aware of the state that is contained by redux.
- a `container` can inject state of `component` into application state with the help of `React-Redux` library
  - `React-Redux` is a bridge between `React` and `Redux`
- a `component` can be defined as a `container` instead of a `component`
  - a `component` can also be call a `view`
  - this `component` is promoted as a `container`
- Only the most parent component that uses a particular piece of state needs to be connected to redux. like LCA.

