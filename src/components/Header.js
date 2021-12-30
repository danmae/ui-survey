import React, { Component } from 'react';
import './header.css';
import {Link} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <nav>
        <div className="navigation-wrapper">
          <div className="topnav">
            <Link to='/'>
              <p>iLL</p>
            </Link>
            <div className="topnav-right">
              <Link to='/'>Startseiten</Link>
              <Link to='/survey'>Umfrage</Link>
              <Link to='/'>iLL-Frontend</Link>
              <Link to='/kontakt'>Kontakt</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;