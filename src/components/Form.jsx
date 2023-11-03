import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputAdd, startEditGender, startFindGender } from "./../action/action";

const Form = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  //   const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(users.editUserId){
    return dispatch(startEditGender(users.input))
    }
    dispatch(startFindGender(users.input));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter the name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={users.input}
          onChange={(e) => dispatch(inputAdd(e.target.value))}
        />
        <input type="submit" value={users.editUserId ? "Edit" : "Add"} />
      </form>
    </div>
  );
};

export default Form;
