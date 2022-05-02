import {
  LOGIN,
  LOGOUT,
} from './actions';

const init = { username: "", password: "", role: "" ,  isLogin: false,};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {

    case LOGIN :
      return {
        ...store,
        username: payload.username,
        password: payload.password,
        role: payload.role,
        isLogin: true,
      };

      case LOGOUT:
         return {
            ...store,
            isLogin: false,
         };

    default:
      return store;
  }
};
