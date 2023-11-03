import React from "react";
import Table from "./Table";
import { useSelector } from "react-redux";
import Listing from "./Listing";
import Stats from "./Stats";

const Display = () => {
  const users = useSelector((state) => state.users);
  
  return (
    <div>
      {users.data.length > 0 && (
        <div>
          <h2>listing user-{users.data.length}</h2>
          <Table />
          <Listing users={users.data} name={"male"} />
          <Listing users={users.data} name={"female"} />
          <Stats />
        </div>
      )}
    </div>
  );
};

export default Display;
