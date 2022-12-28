import React, { memo } from "react";
import { Search } from "react-feather";

const Filter = memo((props) => {
  const { onFilter } = props;
  return (
    <div className="form-group">
      <input
        type="email"
        className="form-control"
        placeholder="Search in customers"
        onChange={(e) => onFilter(e.target.value)}
      />
      <Search />
    </div>
  );
});
export default Filter;
