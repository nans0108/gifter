import { createStore, combineReducers, applyMiddleware } from 'redux';
import createRequestMiddleware  from './middlewares/requestMiddleware';
import thunk from 'redux-thunk';

import listReducer from './reducers/listReducer';
import authorizationReducer from './reducers/authorizationReducer';
import friendReducer from './reducers/friendReducer';

const rootReducer = combineReducers({
  lists: listReducer,
  authorization: authorizationReducer,
  friends: friendReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(
    thunk,
    createRequestMiddleware(),
  ));
}

export default configureStore;
