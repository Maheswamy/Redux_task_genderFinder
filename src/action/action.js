import axios from "axios";

export const startFindGender = (name) => {
  console.log(name);
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.genderize.io?name=${name}`);
      console.log(response);
      dispatch(findGender(response.data));
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
