// to add multiple items of same type -
// checking using id, adding based on quantity
export const addMultipleCartItems = (cartItems, currentItem) => {
  const existingItem = cartItems.find(item => item.id === currentItem.id);

  if (existingItem) {
    return cartItems.map(item => {
      if (item.id === currentItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    // return cartItems.map(cartItem =>
    //   cartItem.id === currentItem.id
    //     ? { ...cartItem, quantity: cartItem + 1 }
    //     : cartItem
    // );
  }

  return [...cartItems, { ...currentItem, quantity: 1 }];
};
