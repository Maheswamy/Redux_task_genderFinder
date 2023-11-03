const intialState = { data: [], input: "" };

const usersReducers = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_NAME": {
      console.log(action.payload, "kajsh");
      return { ...state, data: [...state.data, action.payload] ,input:''};
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
    default: {
      return { ...state };
    }
  }
};

export default usersReducers;
