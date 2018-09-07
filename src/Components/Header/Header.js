import React from 'react';
import './Header.css';

export const Header = (props) => {
  return (
    <header className="header--container">
      <h1 className="app--title">New Idea</h1>
      <div className="collapsible--menu">
        <input type="checkbox" id="menu" />
        <label htmlFor="menu">Menu</label>
        <div className="menu-content">
          <ul>
            <li><a href="#"></a>Home</li>
            <li><a href="#"></a>Services</li>
            <li><a href="#"></a>Projects</li>
            <li><a href="#"></a>About</li>
            <li><a href="#"></a>Blog</li>
            <li><a href="#"></a>Contacts</li>
          </ul>
        </div>
      </div>
    </header>
  );
};