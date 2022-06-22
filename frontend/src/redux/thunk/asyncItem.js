import { getItemSuccessAC, initItemsErrorAC, initItemsSuccessAC, initTypesSuccessAC, initSizesSuccessAC } from "../actionCreators/itemAC"

const action = {

  itemFetch: (id) => (dispatch) => {
    const url = `http://localhost:4000/api/items/${id}`;
    fetch(url, {
      headers: { "content-type": "application/json" },
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        console.log('itemFetch', data.item);
        dispatch(getItemSuccessAC(data.item))}
        )
      .catch(err => dispatch(initItemsErrorAC(err.message)))
  },

  itemsFetch: (type) => (dispatch) => {
    const url = type ? `http://localhost:4000/api/items/type/${type}` : `http://localhost:4000/api/items`;
    fetch(url, {
      headers: { "content-type": "application/json" },
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        dispatch(initItemsSuccessAC(data.rows))}
        )
      .catch(err => dispatch(initItemsErrorAC(err.message)))
  },

  typesFetch: () => (dispatch) => {
    fetch('http://localhost:4000/api/items/types', {
      method: 'GET',
      headers: { "content-type": "application/json" },
    })
    .then(res => res.json())
    .then(data => {
      dispatch(initTypesSuccessAC(data));
    })
    .catch(err => dispatch(initItemsErrorAC(err.message)))
  },

  sizesFetch: () => (dispatch) => {
    fetch('http://localhost:4000/api/items/sizes', {
      method: 'GET',
      headers: { "content-type": "application/json" },
    })
    .then(res => res.json())
    .then(data => {
      dispatch(initSizesSuccessAC(data));
    })
    .catch(err => dispatch(initItemsErrorAC(err.message)))
  },



}

export default action;

// export const itemsFetch = (data) => {
//   console.log('itemsFetch');
//   return (dispatch) => {
//     fetch("http://localhost:4000/api/items", {
//       headers: { "content-type": "application/json" },
//       method: "GET",
//       body: JSON.stringify(data)
//     })
//       .then(res => res.json())
//       .then(data => dispatch(initItemsSuccessAC(data)))
//       .catch(err => dispatch(initItemsErrorAC(err.message)))
//   }
// }
