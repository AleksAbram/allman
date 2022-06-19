import {itemAT} from '../actionTypes/itemAT';

const initialState = {
  list: [],
  error: null,
  loading: false,
};

// eslint-disable-next-line default-param-last
function itemReducer(prevState = initialState, action) {
  switch (action.type) {

    case itemAT.INIT_ITEMS_SUCCESS: {
      return {
        ...prevState,
        loading: false,
        error: null,
        list: action.payload,
      }
    }

    case itemAT.INIT_ITEMS_ERROR: {
      return {
        ...prevState,
        error: action.payload,
      };
    }

    default: {
      return prevState;
    }
  }
}

export default itemReducer;
