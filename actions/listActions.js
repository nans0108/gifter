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
