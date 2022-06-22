import {basketAT} from '../actionTypes/basketAT';

const initialState = {
  basket: [],
};

function basketReducer(prevState = initialState, action) {

  switch (action.type) {

    case basketAT.CLEAN_BASKET: {
      return {
          ...prevState,
          basket: [],
        }
    }

    case basketAT.ADD_TO_BASKET: {
      // return {basket: [{...action.payload}]};
      return {
        ...prevState,
        basket: [...prevState.basket, action.payload,],
        }
    }

    default: {
      return prevState;
    }
  }
}

export default basketReducer;
