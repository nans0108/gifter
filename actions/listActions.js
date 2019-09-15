export function addList(list: Object): Function {
  return (dispatch) => {
    dispatch(addListRequest(list));
  };
}

export function addListRequest(list: Object): Object {
  return {
    type: 'ADD_LIST',
    response: list,
  };
}
