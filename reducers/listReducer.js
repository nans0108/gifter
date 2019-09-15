import Immutable from 'immutable'

const listReducer = (state: Immutable.List = Immutable.List(), action) => {
  switch(action.type) {
    case 'ADD_LIST':
      return state.push(
        Immutable.Map({
          id: 1,
          ownerId: 3,
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
