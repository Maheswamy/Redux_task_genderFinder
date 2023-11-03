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
          <Listing
            users={users.data.filter((ele) => ele.gender === "male")}
            name={"male"}
          />
          <Listing
            users={users.data.filter((ele) => ele.gender === "female")}
            name={"female"}
          />
          <Stats />
        </div>
      )}
    </div>
  );
};

export default Display;
