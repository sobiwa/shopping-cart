import x from '../assets/x.svg';
import { NavLink } from 'react-router-dom';

export default function NavSlide({ showNavSlide, setShowNavSlide }) {
  return (
    <div className={`nav-slide ${showNavSlide ? 'slide-in' : ''}`}>
      <button
        className="nav-slide--close"
        type="button"
        onClick={() => setShowNavSlide(false)}
      >
        <img src={x} alt="close widget" />
      </button>
      <ul>
        <li>
          <NavLink
            onClick={() => setShowNavSlide(false)}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setShowNavSlide(false)}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            to="/shop"
          >
            SHOP
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
