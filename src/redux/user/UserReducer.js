import { UserActionTypes } from './UserTypes';

const INITIAL_STATE = {
  currentUser: null,
};

// every reducer get all actions that are fired, even if is not destined to this reducer itself
const userReducer = (state = INITIAL_STATE, action) => {
  if (action.type === UserActionTypes.SET_CURRENT_USER) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  return state;
};

export default userReducer;
