import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "./../action/action";

const Table = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log(users);

  const handleRemove = (id) => {
    console.log(id);
    dispatch(removeUser(id));
  };
  return (
    <div>
      {users.data.length > 0 && (
        <table border={1}>
          <thead>
            <tr>
              <th>name</th>
              <th>gender</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {users.data?.map((ele, i) => {
              return (
                <tr key={i}>
                  <td>{ele.name}</td>
                  <td>{ele.gender}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleRemove(i);
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
