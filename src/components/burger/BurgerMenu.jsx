import { useState } from 'react';
import { Link } from 'react-router-dom';

function BurgerMenu() {
  const [showSidebar, setShowSidebar] = useState(false);
    const links = [
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
      <div
        onClick={() => setShowSidebar(!showSidebar)}
        className={showSidebar ? 'burger-btn active' : 'burger-btn'}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {showSidebar && (
        <ul
          className="menu__adaptive"
          close={() => setShowSidebar(!showSidebar)}
        >
          {links.map((link, index) => (
            <li className="menu__list">
              <Link to={link.path} className="menu__link" key={index}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default BurgerMenu;
