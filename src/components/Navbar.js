import { useState } from 'react';
import logo from '../assets/logo.png';
import '../css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('no-scroll');
  };

  function closeMenu() {
    setIsMenuOpen(false);
    document.body.classList.remove('no-scroll');
  }

  return (
    <header className="jmbt-header" >
      <nav>
        <NavLink className="jmbt-banner" to="/">
          <img src={logo} alt="Logo" />
          <span className="jmbt-title">Jëmbët</span>
        </NavLink>
        <div className={`jmbt-menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="jmbt-items-group">
          <div className={`jmbt-menu-items ${isMenuOpen ? 'show' : ''}`} id="menu-items">
            <ul className="jmbt-menu">
              <li><NavLink exact="true" activeclassname="active" to="/" onClick={closeMenu}>Accueil</NavLink></li>
              <li><NavLink activeclassname="active" to="/catalog" onClick={closeMenu}>Catalogue</NavLink></li>
              <li><NavLink activeclassname="active" to="/category" onClick={closeMenu}>Catégorie</NavLink></li>
              <li><NavLink activeclassname="active" to="/about" onClick={closeMenu}>À Propos</NavLink></li>
              {/* <li><NavLink activeclassname="active" to="/my-account" onClick={closeMenu}>Mon Compte</NavLink></li> */}
            </ul>
          </div>
          <div className="jmbt-cart">
            <span className="cart-price">$0.00</span>
            <i className="jmt-bag-shopping">
              <FontAwesomeIcon icon={faBagShopping} />
            </i>
            <span className="jmbt-cart-quantity">0</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;