import { CartActionsTypes } from './cart.types';

const toggleCartHidden = () => {
  return {
    type: CartActionsTypes.TOGGLE_CARD_HIDDEN
  };
};

export default toggleCartHidden;
