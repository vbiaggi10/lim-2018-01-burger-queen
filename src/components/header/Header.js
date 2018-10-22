import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="header">
          <nav className="lime lighten-1">
            <div className="nav-wrapper">
              <Link to="/lim-2018-01-burger-queen/" className="brand-logo"><span role="img" aria-label="Hamburger">🍔</span> BURGER QUEEN <span role="img" aria-label="Queen">👑</span></Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {items && items.map((item, key) =>
                  <li className="nav-item" key={key}>
                    <Link to={item.url} name={item.title}>{item.title}</Link>
                  </li>
                )}
              </ul>
            </div>
          </nav>
      </div>
    );
  }
}

export default Header;
