import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputAdd, startFindGender } from "./../action/action";

const Form = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.users.input);
  //   const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    dispatch(startFindGender(input));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter the name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={input}
          onChange={(e) => dispatch(inputAdd(e.target.value))}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Form;
