import Immutable from 'immutable'
import users from '../testDatabase/users.js';

const authorizationReducer = (state: Immutable.Map = Immutable.Map(), action) => {
  switch(action.type) {
    case 'LOGIN':
      return new Immutable.Map(action.response);
    default:
      return state;
  }
}

export default authorizationReducer;
