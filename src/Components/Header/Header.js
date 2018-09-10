import React from '../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
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
            <li><a href="#"></a>Notifications</li>
            <li><a href="#"></a>Profile</li>
            <li><a href="#"></a>Top Tech Talks</li>
            <li><a href="#"></a>New Article</li>
            <li><a href="#"></a>My Articles</li>
          </ul>
        </div>
      </div>
    </header>
  );
};