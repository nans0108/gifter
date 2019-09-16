import Immutable from 'immutable'
import users from '../testDatabase/users.js';

const friendReducer = (state: Immutable.List = Immutable.List(), action) => {
  switch(action.type) {
    case 'GET_FRIENDS':
      const filterUsersList = users.filter((user) => user.id !== action.activeUserId);
      return new Immutable.List(filterUsersList.map((user) => new Immutable.Map(user)));
    default:
      return state;
  }
}

export default friendReducer;
