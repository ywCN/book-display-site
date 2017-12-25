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
- All reducers have **2** arguments.
  1. The current state
  2. The action

## `combineReducers` function
- `import { combineReducers } from 'redux';`
- `const rootReducer = combineReducers({books: BooksReducer});`
  - accepts an object
  - This reducer is going to add a key to our global application state called books where the key is `books`, and the value is whatever gets returned from `BooksReducer`.
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
- **Whenever state changes, the container/component will automatically re-rendered.**
- **Whenever state changes, the new state will be automatically assigned to props of the container/component.**

## What happens after user clicks a button in Redux context
- Loop
  1. user triggers an event, for example, click a button
  2. event listener will call an `action creator`
  3. `action creator` is a function that returns an object called `action`
    - the object has a type that describes the type of `action` that was just triggered
    - the object can also have some data that can further describes the `action`
    - `action creator` function must wire up to redux to make sure it will send `action` to `reducers`
  4. this object is sent to all `reducers` automatically
  5. `reducers` will choose the corresponding `reducer` depends on the type in the object and return corresponding `state`
    - switch statement will determine the type of action
    - `reducders` do not have to respond an action, which is done by using the `default` in switch statement and returns the original `state`
  6. this `state` will be assigned to the corresponding piece of the **newly assembled application state**
  7. since the state is changed, the corresponding components/views will be re-rendered automatically
  8. finished re-rendering, the application will wait for user to trigger another event
  9. another event is triggerred, go back to step1
- Summary: 
  - An action creator is just a function that returns an action.
  - An action is just an object that flows through all of our different reducers.
  - Reducers can then use that action to produce a different value(state) for tis particular piece of state.

## Action
- Actions usually have 2 values.
  - `type`: describes the purpose of the action
  - `payload`: describe or clarifies the conditions of the action that is being triggered.




