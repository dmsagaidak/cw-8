import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><Link to="/">All</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;