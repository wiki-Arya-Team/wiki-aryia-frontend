import React from "react";
import '../css/navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return <header className="header">
    <ul style={{ display: 'flex' }}>
      <li>
        <Link to='register'>Register</Link>
      </li>
      <li>
        <Link to='login'>Login</Link>
      </li>
      <li>
        <Link to='demo'>Demo</Link>
      </li>
    </ul>

  </header>;
};

export default Navbar;
