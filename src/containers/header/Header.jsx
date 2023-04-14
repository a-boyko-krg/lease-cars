import { Link } from 'react-router-dom';
import Menu from '@/components/menu/Menu';
import { useLocation } from 'react-router-dom';


function Header() {
  const location = useLocation();
    return (
    <header className={location.pathname === '/' ? 'header-main' : 'header'}>
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="logo">
            <img src="/images/logo.svg" alt="logo" />
          </Link>
          <Menu />
         
        </div>
      </div>
    </header>
  );
}
export default Header;
