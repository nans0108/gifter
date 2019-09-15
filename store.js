import { createStore, combineReducers, applyMiddleware } from 'redux';
import listReducer from './reducers/listReducer';
import createRequestMiddleware  from './middlewares/requestMiddleware';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  lists: listReducer
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(
    thunk,
    createRequestMiddleware(),
  ));
}

export default configureStore;
