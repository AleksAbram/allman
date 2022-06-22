import {itemAT} from '../actionTypes/itemAT';

const initialState = {
  list: [],
  types: [],
  sizes: [],
  error: null,
  loading: false,
  path: [],
};

// eslint-disable-next-line default-param-last
function itemReducer(prevState = initialState, action) {
  var formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  });

  switch (action.type) {

    case itemAT.GET_ITEM_SUCCESS: {
      return {
        ...prevState,
        loading: false,
        list: [...prevState.list, {...action.payload,
          item_price: formatter.format(action.payload.item_price)
        },
        ]
      }
    }

    case itemAT.INIT_ITEMS_SUCCESS: {

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
