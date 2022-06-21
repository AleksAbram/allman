import { itemAT } from "../actionTypes/itemAT"

export const initItemsSuccessAC = (payload) => {
  return {
    type: itemAT.INIT_ITEMS_SUCCESS,
    payload
  }
}

export const initItemsErrorAC = (payload) => {
  return {
    type: itemAT.INIT_ITEMS_ERROR,
    payload
  }
}

