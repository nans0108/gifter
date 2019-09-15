import { createStore, combineReducers } from 'redux';
import listReducer from './reducers/listReducer';

const rootReducer = combineReducers({
  lists: listReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
