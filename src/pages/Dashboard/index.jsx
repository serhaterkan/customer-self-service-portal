import Filter from "../../components/Filter";
import List from "../../components/List";
import persons from "./data.json";
import React, { useCallback, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState(persons);

  const onFilter = useCallback(
    (value) => {
      const regex = new RegExp(`${value}`, "i");

      const filtered = persons.filter((e) =>
        regex.test(
          e.first_name +
            " " +
            e.last_name +
            "|" +
            e.email +
            "|" +
            e.phone +
            "|" +
            e.policy
        )
      );
      setData(filtered);
    },
    [data]
  );

  return (
    <div className="dashboard">
      <div className="card shadow">
        <div className="card-header">
          <Filter onFilter={onFilter} />
        </div>
        <div className="card-body p-0">
          <List data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
