import axios from "axios";

export const startFindGender = (name) => {
  console.log(name);
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.genderize.io?name=${name}`);
      response.data.id = Number(new Date());
      dispatch(findGender(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const startEditGender = (name) => {
  return async (dispatch,getState) => {
    try {
      const response = await axios.get(`https://api.genderize.io?name=${name}`);
      const state=getState(state=>state)
     
      response.data.id =state.users.editUserId ;

      dispatch(editGender(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const findGender = (data) => {
  return {
    type: "ADD_NAME",
    payload: data,
  };
};
export const editGender = (data) => {
  return {
    type: "EDIT_NAME",
    payload: data,
  };
};

export const removeUser = (id) => {
  return {
    type: "REMOVE_USER",
    payload: id,
  };
};

export const inputAdd = (name) => {
  return {
    type: "INPUT_NAME",
    payload: name,
  };
};

export const setUserID = (id) => {
  return {
    type: "SET_USER_ID",
    payload: id,
  };
};
