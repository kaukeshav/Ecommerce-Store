import { UserActionsTypes } from './user.types';

// action set current user
export const setCurrentUser = user => ({
  type: UserActionsTypes.SET_CURRENT_USER,
  payload: user
});
