import { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Menu() {
  const [showSidebar, setShowSidebar] = useState(false);
  const menuItems = [
    {
      name: 'NEW CARS',
      path: '/new-cars',
    },
    {
      name: 'PRE-OWNED CARS',
      path: '/pre-owned',
    },
    {
      name: 'FINANCE',
      path: '/finance',
    },
    {
      name: 'LEASE VS BUY',
      path: '/lease-vs-buy',
    },
    {
      name: 'CONTACT US',
      path: '/contacts',
    },
  ];
  return (
    <>
      <nav className="menu">
        <ul
          className={
            showSidebar ? 'menu__list menu__list--active' : 'menu__list'
          }
        >
          {menuItems.map((menuItem, index) => (
            <li className="menu__list-item" key={index}>
              <NavLink to={menuItem.path} className="menu__list-link">
                {menuItem.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div
        onClick={() => setShowSidebar(!showSidebar)}
        className={showSidebar ? 'burger-btn active' : 'burger-btn'}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </>
  );
}
export default Menu;
