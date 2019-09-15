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
          items: new Immutable.List(),
        })
      );
    case 'ADD_ELEMENT':
      const listIndex: number = state.findIndex((list) => list.get('id') === action.listId);
      return state.setIn([listIndex, 'items'], state.getIn([listIndex, 'items']).push(new Immutable.Map({
        id: uuid().new(),
        name: action.response.name,
        description: action.response.description,
        placeToBuy: action.response.placeToBuy,
      })));
    default:
      return state;
  }
}

export default listReducer;
