import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  selectCart => selectCart.cartItems
);

export const selectItemCount = createSelector(
  [selectCartItems],
  selectCartItems =>
    selectCartItems.reduce(
      (accumalatedQty, item) => accumalatedQty + item.quantity,
      0
    )
);
