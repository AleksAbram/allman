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

export const initTypesSuccessAC = (payload) => {
  return {
    type: itemAT.INIT_TYPES_SUCCESS,
    payload
  }
}

export const initSizesSuccessAC = (payload) => {
  return {
    type: itemAT.INIT_SIZES_SUCCESS,
    payload
  }
}

