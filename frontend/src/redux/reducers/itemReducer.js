import {itemAT} from '../actionTypes/itemAT';

const initialState = {
  list: [],
  types: [],
  sizes: [],
  error: null,
  loading: false,
};

// eslint-disable-next-line default-param-last
function itemReducer(prevState = initialState, action) {
  switch (action.type) {

    case itemAT.INIT_ITEMS_SUCCESS: {
      var formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumFractionDigits: 0,
      });
      const list = action.payload.map((item) => ({...item, item_price: formatter.format(item.item_price)}));
      return {
        ...prevState,
        loading: false,
        error: null,
        list,
      }
    }

    case itemAT.INIT_TYPES_SUCCESS: {
      return {
        ...prevState,
        types: action.payload,
      }
    }

    case itemAT.INIT_SIZES_SUCCESS: {
      return {
        ...prevState,
        sizes: action.payload,
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
