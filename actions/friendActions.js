export function getFriends(): Function {
  return (dispatch, getState) => new Promise((resolve) => {
    const activeUserId: number = getState().authorization.get('id');
    dispatch(getFriendsRequest(activeUserId));
    resolve();
  });
}

export function getFriendsRequest(activeUserId: number): Object {
  return {
    type: 'GET_FRIENDS',
    activeUserId: activeUserId,
  };
}
