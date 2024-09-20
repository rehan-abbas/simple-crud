import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Create a Post
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="all">
              All Posts
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
