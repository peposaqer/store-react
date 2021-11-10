import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./type";

export function addToCart(productInfo, quantity) {
  return {
    type: ADD_TO_CART,
    productInfo,
    quantity
  };
}
export function removeFromCart(index) {
  return {
    type: REMOVE_FROM_CART,
    index
  };
}
export function clearCart(index) {
  return {
    type: CLEAR_CART
  };
}
