import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';

class Header extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="header">
        <Navbar href='/' className='lime lighten-1' brand='🍔 BURGER QUEEN 👑' right>
          {items && items.map((item, key) =>
            <NavItem key={`navmobile${key}`} href={item.url} name={item.title}>{item.title}</NavItem>
          )}
        </Navbar>
      </div>
    );
  }
}

export default Header;
