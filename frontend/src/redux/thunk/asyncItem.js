import { initItemsErrorAC, initItemsSuccessAC } from "../actionCreators/itemAC"

const action = {
  itemsFetch: (data) => (dispatch) => {
    fetch("http://localhost:4000/api/items", {
      headers: { "content-type": "application/json" },
      method: "GET",
      body: JSON.stringify()
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(initItemsSuccessAC(data.rows))}
        )
      .catch(err => dispatch(initItemsErrorAC(err.message)))
  }
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
