import { combineReducers, legacy_createStore as createStore } from "redux";
import aboutUsReducer from "./about-us-reducer";
import quotesReducer from "./quotes-reducer";

let reducers = combineReducers({
  quotePage: quotesReducer,
  aboutUsPage: aboutUsReducer,
});

let store = createStore(reducers);

export default store;
