export function addList(list: Object): Function {
  return (dispatch, getState) => new Promise((resolve) => {
    const ownerId: number = getState().authorization.get('id');
    dispatch(addListRequest(list, ownerId));
    resolve();
  });
}

export function addListRequest(list: Object, ownerId: number): Object {
  return {
    type: 'ADD_LIST',
    response: list,
    ownerId: ownerId,
  };
}

export function addElementToList(element: Object, listId: number): Function {
  return (dispatch) => new Promise((resolve) => {
    dispatch(addElementToListRequest(element, listId));
    resolve();
  });
}

export function addElementToListRequest(element: Object, listId: number): Object {
  return {
    type: 'ADD_ELEMENT',
    response: element,
    listId: listId,
  };
}

export function removeElementFromList(elementId: number, listId: number): Function {
  return (dispatch) => new Promise((resolve) => {
    dispatch(removeElementFromListRequest(elementId, listId));
    resolve();
  });
}

export function removeElementFromListRequest(elementId: number, listId: number): Object {
  return {
    type: 'REMOVE_ELEMENT',
    elementId: elementId,
    listId: listId,
  };
}
