import { CartActionsTypes } from './cart.types';

export const toggleCartHidden = () => {
  return {
    type: CartActionsTypes.TOGGLE_CARD_HIDDEN
  };
};

export const addCartItem = item => ({
  type: CartActionsTypes.ADD_ITEM,
  payload: item
});
