import { basketAT } from "../actionTypes/basketAT"

export const addToBasketAC = (payload) => {
  return {
    type: basketAT.ADD_TO_BASKET,
    payload,
  }
}
