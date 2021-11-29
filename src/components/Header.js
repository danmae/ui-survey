import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="topnav">
            <p>iLL</p>
            <div className="topnav-right">
                <p>Startseite</p>
                <p>Umfrage</p>
                <p>iLL-Frontend</p>
                <p>Kontakt</p>
            </div>
        </div>
      </nav>
    )
  }
}

export default Header;