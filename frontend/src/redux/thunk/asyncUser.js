import {
  authUsersAC,
  logoutUserAC,
  fetchUserUpdateAC,
  addUserPhotoAC,
  errorMessage,
} from "../actionCreators/userAC";

export const authUsersFetch = (data) => {
  return (dispatch) => {
    fetch("http://localhost:4000/api/user/login", {
      credentials: "include",
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(authUsersAC(data));
        window.location.href = "/";
      })
      .catch((err) => dispatch(errorMessage("Неверные данные при вводе")));
    // .catch(err => dispatch(errorMessage(err.message2)))
    ///{dispatch(authUsersAC(newData))
    //window.location.href='/'}
  };
};

export const regUsersFetch = (user) => {
  // console.log(user);
  return (dispatch) => {
    fetch("http://localhost:4000/api/user/registration", {
      credentials: "include",
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(authUsersAC(data));
        window.location.href = "/";
      })
      // .then((data) => console.log(data))
      .catch((err) => dispatch(errorMessage("Неверные данные при вводе")));
  };
};

export const checkAuthFetch = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/api/user/check", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => dispatch(authUsersAC(data)))
      .catch((err) => console.log(err.message));
  };
};

export const logoutFetch = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/api/user/logout", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => dispatch(logoutUserAC(data)))
      .catch((err) => console.log(err.message));
  };
};

export const putFetchUser = (data) => {
  return (dispatch) => {
    fetch("/profile", {
      headers: { "content-type": "application/json" },
      method: "PUT",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => dispatch(fetchUserUpdateAC(data)));
  };
};
// загрузка фото
export const postFetchUserPhoto = (data) => {
  return (dispatch) => {
    fetch("/profile", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => dispatch(addUserPhotoAC(data)));
  };
};
