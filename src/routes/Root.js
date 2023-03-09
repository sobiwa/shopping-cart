import { useState, useEffect } from 'react';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';
import logo from '../assets/Logo-min.png';
import cartIcon from '../assets/Icon-Shopping.svg';
import dropIcon from '../assets/menu.svg';
import CartSlide from '../components/CartSlide.js';
import ScrollToTop from '../components/ScrollToTop';
import mallows from '../mallows.js';
import NavSlide from '../components/NavSlide';

export default function Root() {
  const navigate = useNavigate();

  const [inventory, setInventory] = useState(
    mallows.map((mallow) => ({ ...mallow, runningStock: mallow.stock }))
  );

  const [cart, setCart] = useState([]);
  useEffect(() => {
    cart.forEach((cartItem) => {
      setInventory((prev) =>
        prev.map((item) =>
          item.name === cartItem.product.name
            ? { ...item, runningStock: item.stock - cartItem.qty }
            : item
        )
      );
    });
  }, [cart]);

  const [showCartSlide, setShowCartSlide] = useState(false);
  const [showNavSlide, setShowNavSlide] = useState(false);

  return (
    <>
      <ScrollToTop />
      <div
        onClick={() => {
          setShowCartSlide(false);
          setShowNavSlide(false);
        }}
        className="fade-screen"
        style={{
          transition: '0.3s',
          pointerEvents: showCartSlide || showNavSlide ? 'all' : 'none',
          opacity: showCartSlide || showNavSlide ? '0.3' : '0',
        }}
      ></div>
      <header>
        <div className="logo" onClick={() => navigate('/')}>
          <img src={logo} alt="squishmallow logo" />
        </div>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Shop
          </NavLink>
        </nav>
        <div class="header--alt-nav">
          <div className="header--cart">
            <button
              className="header--cart-button"
              type="button"
              onClick={() => setShowCartSlide(true)}
            >
              <img src={cartIcon} alt="shopping cart" />
              <div className="header--cart-count">
                {cart.length ? cart.reduce((a, b) => a + +b.qty, 0) : 0}
              </div>
            </button>
          </div>
          <div className="header--drop-down-container">
            <button
              className="header--drop-down"
              type="button"
              onClick={() => setShowNavSlide(true)}
            >
              <img src={dropIcon} alt="open menu" />
            </button>
          </div>
        </div>
      </header>
      <main>
        <Outlet context={{ inventory, setInventory, cart, setCart }} />
      </main>
      <CartSlide
        showCartSlide={showCartSlide}
        setShowCartSlide={setShowCartSlide}
        cart={cart}
        setCart={setCart}
      />
      <NavSlide showNavSlide={showNavSlide} setShowNavSlide={setShowNavSlide} stock={inventory} />
    </>
  );
}
