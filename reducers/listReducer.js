import Immutable from 'immutable'
import uuid from 'short-uuid';


const listReducer = (state: Immutable.List = Immutable.List(), action) => {
  switch(action.type) {
    case 'ADD_LIST':
      return state.push(
        Immutable.Map({
          id: uuid().new(),
          ownerId: action.ownerId,
          name: action.response.name,
          description: action.response.description,
          dueDate: action.response.dueDate,
          isActive: true,
          items: [],
        })
      );
    default:
      return state;
  }
}

export default listReducer;
