const authenticationReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_LIST:
      return state.push(
        {
          id: 1,
          ownerId: 3,
          name: action.payload.name,
          description: action.payload.description,
          dueDate: action.payload.dueDate,
          isActive: true,
          items: [],
        });
    default:
      return state;
  }
}

export default authenticationReducer;
