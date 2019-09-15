export function login(user: Object): Function {
  return (dispatch) => {
    dispatch(loginRequest(user));
  };
}

export function loginRequest(user: Object): Object {
  return {
    type: 'LOGIN',
    response: user,
  };
}
