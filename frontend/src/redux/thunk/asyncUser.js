import { authUsersAC, logoutUserAC, fetchUserUpdateAC, addUserPhotoAC } from "../actionCreators/userAC"

export const authUsersFetch = (data) => {
  return (dispatch) => {// возвращаем новую функци, которая параметром принимает dispatch
    fetch("/login", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => dispatch(authUsersAC(data)))//вызываем dispatch, который прокинули через параметры и в него закидываем actionCreators и в него же передаем json(в данном случае это массив пользователей, который пришел с сервера)
      .catch(err => console.log(err.message))
  }
}


export const regUsersFetch = (data) => {
  return (dispatch) => {
    fetch("/registration", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => dispatch(authUsersAC(data)))
      .catch(err => console.log(err.message))
  }
}

export const checkAuthFetch = () => {
  return (dispatch) => {
    fetch("/checkauth")
      .then(res => res.json())
      .then(data => dispatch(authUsersAC(data)))
      .catch(err => console.log(err.message))
  }
}

export const logoutFetch = () => {
  return (dispatch) => {
    fetch("/logout")
      .then(res => res.json())
      .then(data => dispatch(logoutUserAC(data)))
      .catch(err => console.log(err.message))
  }
}

export const putFetchUser = (data) => {
  return (dispatch) => {
    fetch("/profile", {
      headers: { "content-type": "application/json" },
      method: 'PUT',
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => dispatch(fetchUserUpdateAC(data)))

  }
}
// загрузка фото
export const postFetchUserPhoto = (data) => {
  return (dispatch) => {
    fetch("/profile", {
      headers: { "content-type": "application/json" },
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => dispatch(addUserPhotoAC(data)))
  }
}