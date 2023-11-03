import React from "react";
import PropTypes from "prop-types";

const Listing = ({ users, name }) => {
  return (
    <div>
      <h4>
        listing of {name}-{users.length}
      </h4>
      <ul>
        {users.map((ele, i) => (
          <li key={i}>{ele.name}</li>
        ))}
      </ul>
    </div>
  );
};

Listing.propTypes = {
  users: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default Listing;
