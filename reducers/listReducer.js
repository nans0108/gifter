import Immutable from 'immutable'
import uuid from 'short-uuid';

const listReducer = (state: Immutable.List = Immutable.List(), action) => {
  let listIndex: number;

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
       listIndex = state.findIndex((list) => list.get('id') === action.listId);
      return state.setIn([listIndex, 'items'], state.getIn([listIndex, 'items']).push(new Immutable.Map({
        id: uuid().new(),
        name: action.response.name,
        description: action.response.description,
        placeToBuy: action.response.placeToBuy,
      })));
    case 'REMOVE_ELEMENT':
      listIndex = state.findIndex((list) => list.get('id') === action.listId);
      const elementIndex: number = state.getIn([listIndex, 'items']).findIndex((element) => element.get('id') === action.elementId);
      return state.deleteIn([listIndex, 'items', elementIndex]);
    default:
      return state;
  }
}

export default listReducer;
