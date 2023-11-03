import React from "react";

const Listing = ({ users, name }) => {
  const data = users.filter((ele) => ele.gender === name);
  return (
    <div>
      <h4>
        listing of {name}-{data.length}
      </h4>
      <ul>
        {data.map((ele, i) => (
          <li key={i}>{ele.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Listing;
