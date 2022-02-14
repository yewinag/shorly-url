import React from 'react';

import logo from '../../assets/icons/logo.svg';
import menu from '../../assets/icons/menu.svg';
import { Button } from '../common';
import { useToggle } from '../../hooks';

function Header() {
  const [isOpen, isOpenActions] = useToggle(false);

  return (
    <header className="header">
      <header>
        <a href="/" alt="shortly logo icon">
          <img src={logo} alt="shortly logo icon" />
        </a>
      </header>
      <nav className={`nav ${isOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#resources">Resources</a>
          </li>
        </ul>
        <div>
          <Button className="login" type="button" label="Login" />
          <Button className="primary signup" type="button" label="Signup" />
        </div>
      </nav>
      <Button
        className="icon-btn"
        icon={<img src={menu} alt="menu icon" />}
        callback={() => isOpenActions.toggle(!isOpen)}
        style={{ width: 'normal' }}
      />
    </header>
  );
}

export default Header;
