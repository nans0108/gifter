import { createStore, combineReducers, applyMiddleware } from 'redux';
import createRequestMiddleware  from './middlewares/requestMiddleware';
import thunk from 'redux-thunk';

import listReducer from './reducers/listReducer';
import authenticationReducer from './reducers/authenticationReducer';

const rootReducer = combineReducers({
  lists: listReducer,
  authentication: authenticationReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(
    thunk,
    createRequestMiddleware(),
  ));
}

export default configureStore;
