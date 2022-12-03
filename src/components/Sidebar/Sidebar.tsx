import React from 'react';
import {Link} from "react-router-dom";

const categories = [
  {title: 'Star Wars', id: 'star-wars'},
  {title: 'Music', id: 'music'},
  {title: 'Motivational', id: 'motivational'},
  {title: 'Politicians', id: 'politicians'},
  {title: 'Writers', id: 'writers'},
]

const Sidebar = () => {
  return (
    <div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><Link to="/">All</Link></li>
        {categories.map(item => (
          <li
            key={item.id}
            className="list-group-item"
          ><Link to={'/categories/' + item.id}>{item.title}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;