import { CartActionsTypes } from './cart.types';

const INITITAL_STATE = {
  hidden: true
};

const CartReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case CartActionsTypes.TOGGLE_CARD_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default CartReducer;
