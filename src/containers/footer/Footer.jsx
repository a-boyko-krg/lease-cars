import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__menu">
          <ul className="footer__menu-list">
            <li className="footer__menu-item">
              <p className="footer__menu-title">Products</p>
            </li>
            <li className="footer__menu-item">
              <Link to="#" className="footer__menu-link">
                Used
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link to="#" className="footer__menu-link">
                New
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link to="#" className="footer__menu-link">
                Sell your car
              </Link>
            </li>
          </ul>
          <ul className="footer__menu-list">
            <li className="footer__menu-item">
              <p className="footer__menu-title">Resources</p>
            </li>
            <li className="footer__menu-item">
              <Link to="#" className="footer__menu-link">
                Blog
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link to="#" className="footer__menu-link">
                FAQ
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link to="#" className="footer__menu-link">
                Contact us
              </Link>
            </li>
          </ul>
          <ul className="footer__menu-list">
            <li className="footer__menu-item">
              <p className="footer__menu-title">Work With TrueCar</p>
            </li>
            <li className="footer__menu-item">
              <Link to="#" className="footer__menu-link">
                Dealers
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link to="#" className="footer__menu-link">
                Partners
              </Link>
            </li>
          </ul>
          <ul className="footer__menu-list">
            <li className="footer__menu-item">
              <p className="footer__menu-title">About</p>
            </li>
            <li className="footer__menu-item">
              <Link to="#" className="footer__menu-link">
                About us
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link to="#" className="footer__menu-link">
                Team
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link to="#" className="footer__menu-link">
                Careers
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="app">
          <li className="app__item">
            <Link to="#" className="app__item-link">
              <img src="/images/app-store.svg" alt="app-store" />
            </Link>
          </li>
          <li className="app__item">
            <Link to="#" className="app__item-link">
              <img src="/images/google-play.svg" alt="google-play" />
            </Link>
          </li>
        </ul>

        <div className="footer__copy">
          <p className="footer__copy-text">
            For questions about the TrueCar Auto Buying Service please call
            1-888-878-3227.
          </p>
          <p className="footer__copy-text">
            Certified Dealers are contractually obligated by TrueCar to meet
            certain customer service requirements and complete the TrueCar
            Dealer Certification Program.
          </p>
          <p className="footer__copy-text">
            TrueCar does not broker, sell, or lease motor vehicles. Unless
            otherwise noted, all vehicles shown on this website are offered for
            sale by licensed motor vehicle dealers. All vehicles are subject to
            prior sale. By accessing this website, you agree to the TrueCar
            Terms of Service and Privacy Policy.
          </p>
        </div>
        <nav className="copy__nav">
          <ul className="copy__nav-list">
            <li className="copy__nav-item">
              <Link to="#" className="copy__nav-link">
                Terms of Service
              </Link>
            </li>
            <li className="copy__nav-item">
              <Link to="#" className="copy__nav-link">
                Privacy Policy
              </Link>
            </li>
            <li className="copy__nav-item">
              <Link to="#" className="copy__nav-link">
                Do Not Sell My Personal Information
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
export default Footer;
