import x from '../assets/x.svg';
import Search from './Search';
import { NavLink } from 'react-router-dom';

export default function NavSlide({ showNavSlide, setShowNavSlide, stock }) {
  return (
    <div className={`nav-slide ${showNavSlide ? 'slide-in' : ''}`}>
      <Search stock={stock} exit={() => setShowNavSlide(false)} isOpen={showNavSlide}/>
      <button
        className="nav-slide--close"
        type="button"
        onClick={() => setShowNavSlide(false)}
      >
        <img src={x} alt="close widget" />
      </button>
      <ul>
        <li className='nav-link-container'>
          <NavLink
            onClick={() => setShowNavSlide(false)}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li className='nav-link-container'>
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
