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
          contributors: new Immutable.List(),
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
    case 'ADD_CONTRIBUTOR':
       listIndex = state.findIndex((list) => list.get('id') === action.listId);
      return state.setIn([listIndex, 'contributors'], state.getIn([listIndex, 'contributors']).push(action.contributorId));
    case 'REMOVE_CONTRIBUTOR':
      listIndex = state.findIndex((list) => list.get('id') === action.listId);
      const contributorIndex: number = state.getIn([listIndex, 'contributors']).findIndex((conributor) => conributor === action.contributorId);
      return state.deleteIn([listIndex, 'contributors', contributorIndex]);
    default:
      return state;
  }
}

export default listReducer;
