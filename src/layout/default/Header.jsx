import React, { memo } from "react";
import { Database } from "react-feather";

const Header = memo(() => (
  <header>
    <div className="container">
      <div className="logo">
        <Database size={30} /> <h1>Customer Self Service Portal</h1>
      </div>
    </div>
  </header>
));

export default Header;
