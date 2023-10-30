import * as Reducers from "./Reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

function reducer(state = {}, action) {
  try {
    return Reducers[action.type](state, action);
  } catch (err) {
    console.error(err);
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));
