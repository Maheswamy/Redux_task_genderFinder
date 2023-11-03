const intialState = { data: [], input: "", editUserId: "" };

const usersReducers = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_NAME": {
      console.log(action.payload, "kajsh");
      return { ...state, data: [...state.data, action.payload], input: "" };
    }
    case "REMOVE_USER": {
      console.log(action.payload);
      return {
        ...state,
        data: [...state.data.filter((ele, i) => i != action.payload)],
      };
    }
    case "INPUT_NAME": {
      return { ...state, input: action.payload };
    }

    case "SET_USER_ID": {
      return {
        ...state,
        editUserId: action.payload,
        input: state.data.find((ele) => ele.id === action.payload).name,
      };
    }

    case "EDIT_NAME": {
      console.log(state.data, action.payload, "edit");
      return {
        ...state,
        data: state.data.map((ele) => {
          if (ele.id === action.payload.id) {
            return { ...ele, ...action.payload };
          } else {
            return { ...ele };
          }
        }),
        input: "",
        editUserId: "",
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default usersReducers;
