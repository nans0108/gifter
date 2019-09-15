import users from '../testDatabase/users.js';

export function login(user: Object): Function {
  return (dispatch) => new Promise((resolve, reject) => {
    const findedUser: Object = users.find((_user) => _user.email == user.email);
    if (!!findedUser) {
      dispatch(loginRequest(findedUser));
      resolve();
    } else {
      reject();
    }
  })
};

export function loginRequest(user: Object): Object {
  return {
    type: 'LOGIN',
    response: user,
  };
}
