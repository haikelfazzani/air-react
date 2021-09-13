import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'

function Navbar () {

  const [navToggle, setNavToggle] = useState(false);

  const onNavToggle = () => {
    setNavToggle(!navToggle);
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src="https://i.ibb.co/qsYRG2M/live-show.png" alt="online web editor" loading="lazy" />
      </Link>

      <button type="button" className="btn navbar-toggler fs-20" onClick={onNavToggle}>
        <i className="fa fa-bars"></i> Dropdown
      </button>

      <div className={"navbar-collapse " + (navToggle ? '' : 'd-md-none')}>
        <ul className="vertical-align">
          <li className="nav-item mr-2"><Link to="/">Streaming</Link></li>
          <li className="nav-item mr-2"><Link to="/">discover</Link></li>
          <li className="nav-item mr-2"><Link to="/">watchlist</Link></li>
        </ul>

        <ul className="vertical-align">
          <li className="nav-item mr-2">Login</li>          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;