import UserActionTypes from './UserTypes';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

// every reducer get all actions that are fired, even if is not destined to this reducer itself
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
