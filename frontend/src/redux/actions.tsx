import * as types from "./actionType"
import axios from 'axios';



const getUsers = (users:any) => ({
    type: types.GET_USERS,
	payload:users,
})

const userDelete = () =>({
  type:types.DELETE_USER
})

const userAdd = () =>({
  type:types.ADD_USER
})

const getUser = (user:any) =>({
  type: types.GET_SINGLE_USER,
  payload:user
})

const userUpdate = () => ({
  type: types.UPDATE_USER,
 
})

export const loadUsers = () => {
	return function (dispatch:any) {
    axios
      .get(`http://localhost:8000/v1/users?limit=30`)
      .then((res) => {
        console.log("data is  -------->>>>>", res.data);
        dispatch(getUsers(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export const deleteUser = (id:string) => { 
  return function (dispatch: any) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
        .then(() => {
        dispatch(userDelete());
        dispatch(loadUsers());
      })
      .catch((error) => {
        console.log(error);
      });
     
  };
};

export const addUser = (user:Object) => { 
  return function (dispatch: any) {
    axios
      .post(`http://localhost:8000/v1/users`,user)
      .then((res) => {
        console.log("added user is---->>>", res)
        dispatch(userAdd());

      })
      .catch((error) => {
        console.log(error);
      });
     
  };
};


export const getSingleUser = (id:string) => { 
  return function (dispatch: any) {
    axios
    .get(`http://localhost:8000/v1/users/${id}`)
    .then((res) => {
      console.log("edit user is---->>>", res)
      dispatch(getUser(res.data));

    })
      .catch((error) => {
        console.log(error);
      });

  };
};

export const updateUser = (user:any,id:string) => { 
  return function (dispatch: any) {
    axios
    .patch(`http://localhost:8000/v1/users/${id}`,user)
    .then((res) => {
      console.log("edit user is---->>>", res)
      dispatch(userUpdate());

    })
      .catch((error) => {
        console.log(error);
      });

  };
};