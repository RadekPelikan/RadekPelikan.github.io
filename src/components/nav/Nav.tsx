import React from "react";
import { Link } from "react-router-dom";

const items = [
  { title: "Blog", path: "/blog" },
  { title: "Notes", path: "/notes" },
];

const Nav = () => {
  return (
    <div className="flex justify-between px-4">
      <Link to="/" className="text-xl">
        Ráďův ósm web
      </Link>
      <div className="flex gap-6">
        {items.map((item, i) => (
          <Link to={item.path} key={i} className="text-xl">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
