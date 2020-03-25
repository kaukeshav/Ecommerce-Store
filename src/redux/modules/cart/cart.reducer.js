import { CartActionsTypes } from './cart.types';
import { addMultipleCartItems } from './cart.utlis';

const INITITAL_STATE = {
  hidden: true,
  cartItems: []
};

const CartReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case CartActionsTypes.TOGGLE_CARD_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionsTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addMultipleCartItems(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default CartReducer;
