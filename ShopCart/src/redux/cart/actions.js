import CartActionType from "./actionType";

export const addProductToCart = (payload) => ({
  type: CartActionType.ADD_PRODUCT,
  payload,
});

export const removeProductFromCart = (payload) => ({
  type: CartActionType.REMOVE_PRODUCT,
  payload,
});
