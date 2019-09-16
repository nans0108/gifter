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

// --- elements --- //

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



export function changeReservedByIdValue(userId?: numer, elementId: number, listId: number): Function {
  return (dispatch) => new Promise((resolve) => {
    dispatch(changeReservedByIdValueRequest(userId, elementId, listId));
    resolve();
  });
}

export function changeReservedByIdValueRequest(userId?: number, elementId: number, listId: number): Object {
  return {
    type: 'CHANGE_RESERVED_BY_VALUE',
    response: userId,
    elementId: elementId,
    listId: listId,
  };
}

// --- contributors --- //

export function addContibutorToList(contributorId: number, listId: number): Function {
  return (dispatch) => new Promise((resolve) => {
    dispatch(addContibutorToListRequest(contributorId, listId));
    resolve();
  });
}

export function addContibutorToListRequest(contributorId: number, listId: number): Object {
  return {
    type: 'ADD_CONTRIBUTOR',
    contributorId: contributorId,
    listId: listId
  };
}

export function removeContibutorFromList(contributorId: number, listId: number): Function {
  return (dispatch) => new Promise((resolve) => {
    dispatch(removeContibutorFromListRequest(contributorId, listId));
    resolve();
  });
}

export function removeContibutorFromListRequest(contributorId: number, listId: number): Object {
  return {
    type: 'REMOVE_CONTRIBUTOR',
    contributorId: contributorId,
    listId: listId,
  };
}
