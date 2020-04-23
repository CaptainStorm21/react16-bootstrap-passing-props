import React from "react";

function Navbar() {
  return (
<div className = "navbar navbar-expand">
  <a className="navbar-brand" href="#"> <h3></h3>React Reboot</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="#">Link 1</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link 2</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Dropdown link
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Link 1</a>
        <a className="dropdown-item" href="#">Link 2</a>
        <a className="dropdown-item" href="#">Link 3</a>
      </div>
    </li>
  </ul>
 </div>
  );
}

export default Navbar;
