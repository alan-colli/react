import CartActionType from "./actionType";

export const addProductToCart = (payload) => ({
  type: CartActionType.ADD_PRODUCT,
  payload,
});

export const removeProductFromCart = (payload) => ({
  type: CartActionType.REMOVE_PRODUCT,
  payload,
});

export const increaseProduct = (payload) => ({
  type: CartActionType.INCREASE_PRODUCT,
  payload,
});

export const decreaseProduct = (payload) => ({
  type: CartActionType.DESCREASE_PRODUCT,
  payload,
});
