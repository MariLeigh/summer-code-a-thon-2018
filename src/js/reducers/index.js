import { ADD_USER_TYPE } from '../constants/action-types';

const initialState = {
  userType: []
};

function userReducer(state = initialState, action) {
  if (action.type === "ADD_USER_TYPE") {
    return Object.assign({}, state, {
      userType: state.userType.concat(action.payload)
    })
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_TYPE:
      return { ...state, userType: [...state.userType, action.payload] };
    default:
      return state;
  }
};

export default { rootReducer, userReducer }