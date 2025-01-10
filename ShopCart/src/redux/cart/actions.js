import CartActionType from "./actionType";

export const addProductToCart = (payload) => ({
  type: CartActionType.ADD_PRODUCT,
  payload,
});
