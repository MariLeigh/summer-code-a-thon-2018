import { ADD_USER_TYPE } from '../constants/action-types';

export const addUserType = userType => ({ type: ADD_USER_TYPE, payload: userType });