import Immutable from 'immutable'
import users from '../testDatabase/users.js';

const authorizationReducer = (state: Immutable.Map = Immutable.Map(), action) => {
  switch(action.type) {
    case 'LOGIN':
      const authenticatedUser: Object = users.find(user => user.email === actions.response.email)
      return new Immutable.Map({authenticatedUser});
    default:
      return state;
  }
}

export default authorizationReducer;
