import React from "react";

function Navbar() {
  return (
<nav class="navbar navbar-default" role="navigation">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>    
  </div>
  <a class="navbar-brand" href="#">Brand</a>
  <div class="navbar-collapse collapse">
    <ul class="nav navbar-nav navbar-left">
        <li><a href="#">Left</a></li>
        <li><a href="#about">Left</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#about">Right</a></li>
      <li><a href="#contact">Right</a></li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;
