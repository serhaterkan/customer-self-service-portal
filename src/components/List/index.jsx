import React, { memo } from "react";
import { Phone, Mail, FileText } from "react-feather";

const List = memo((props) => {
  const { data } = props;

  return (
    <ul className="list-group">
      {data.map((e) => (
        <li key={e.id} className="list-group-item">
          <div className="row">
            <div className="col-12">
              <span>
                {e.first_name} {e.last_name}
              </span>
            </div>
            <div className="col-lg-4 col-md-12 d-flex align-items-center">
              <Phone size={15} />
              <span className="ml-2">{e.phone}</span>
            </div>
            <div className="col-lg-6 col-md-12 d-flex align-items-center">
              <Mail size={15} />
              <span className="ml-2">{e.email}</span>
            </div>
            <div className="col-lg-2 col-md-12 d-flex align-items-center">
              <FileText size={15} />
              <span className="ml-2">{e.policy}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
});

export default List;
