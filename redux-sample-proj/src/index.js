import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { connect, Provider } from "react-redux";

// 1. React Layer a.k.a View or Component

class Counter extends React.Component {
  render() {
    const {value, increment} = this.props;

    return(
      <div>
        <p>{value}</p>
        <button onClick={increment}>Increment</button>
      </div>
    )
  }
}

// 2. Implement Redux
// 2.1 Define Actions
const incrementAction = {type: "INCREMENT"}

// 2.2 Define Reducer
function counter(state={count: 0}, action) {
  const count = state.count;

  switch(action.type) {
    case "INCREMENT":
      return {count: count + 1}
      break;
    
    default:
      return state;
  }
}

// 2.3 Create a store
//                       (reducer)
const store = createStore(counter);

// 3 Integrate React and Redux
// Map React props to Redux store state
function mapStateToProps(state) {
  return { value: state.count }
}

// map dispatch to even handling functions in React Component
function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(incrementAction)
  }
}

const MyCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

ReactDOM.render(<Provider store={store}>
                  <MyCounter /></Provider>, document.getElementById('root'));
registerServiceWorker();
