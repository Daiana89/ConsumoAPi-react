import React from 'react';

const Navbar = ({brand}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <div>
      <a className="navbar-brand" href="#">{brand}</a>
    </div>
  </nav>
  );
};

export default Navbar;
