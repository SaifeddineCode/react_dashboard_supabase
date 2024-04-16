import { createStore } from 'redux';
import { combineReducers } from 'redux';
import {currentLoggedInReducer, filterProductReducer, sidebarReducer} from './reducer';


const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  filterProducts : filterProductReducer,
  user : currentLoggedInReducer
});

const store = createStore(rootReducer);

export default store;