export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItems => cartItems.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItems => cartItems.id === cartItemToRemove.id
  );

  if (existingCartItem) {
    return cartItems
      .map(cartItem =>
        cartItem.id === cartItemToRemove.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            }
          : cartItem
      )
      .filter(cartItem => cartItem.quantity > 0);
  }

  return [...cartItems];
};

export const clearItemFromCart = (cartItems, cartItemToClear) =>
  cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
