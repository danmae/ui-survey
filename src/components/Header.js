import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="topnav">
            <p>iLL</p>
            <div className="topnav-right">
                <span>Startseite</span>
                <span>Umfrage</span>
                <span>iLL-Frontend</span>
                <span>Kontakt</span>
            </div>
        </div>
      </nav>
    )
  }
}

export default Header;