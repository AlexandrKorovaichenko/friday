import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {

  return (
      <div>
        <div><NavLink to="/login">LoginPage</NavLink></div>
        <div><NavLink to="/reg">RegPage</NavLink></div>
        <div><NavLink to="/newPas">Components</NavLink></div>
        <div><NavLink to="/recoverPas">Components</NavLink></div>
        <div><NavLink to="/404">Components</NavLink></div>
        <div><NavLink to="/components">Components</NavLink></div>
        <div><NavLink to="/404">404</NavLink></div>
      </div>
  );
}

export default Header

