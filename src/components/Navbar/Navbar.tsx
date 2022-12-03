import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand text-white">Quotes Central</span>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-white" >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="new-quote" className="nav-link text-white">Submit new quote</NavLink>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;