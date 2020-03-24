import { CartActionsTypes } from './cart.types';

export const toggleCartHidden = () => {
  return {
    type: CartActionsTypes.TOGGLE_CARD_HIDDEN
  };
};
