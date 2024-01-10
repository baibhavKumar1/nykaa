import {
    REGISTER_USER_ERROR,REGISTER_USER_SUCCESS,REGISTER_USER_REQUEST,LOGIN_USER_ERROR,LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS
  } from "./actionType";
  
  const initState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: null,
    loggedInUser: null,
  };
  
  export const reducer = (state = initState, {type,payload}) => {
    switch (type) {
      case REGISTER_USER_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case REGISTER_USER_ERROR:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case REGISTER_USER_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
        };
      case LOGIN_USER_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case LOGIN_USER_ERROR:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case LOGIN_USER_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isAuth: true,
          token: payload.data.token,
          loggedInUser: payload.user,
        };
      case "logout":
        return {
          ...initState,
        };
      default:
        return state;
    }
  };
  