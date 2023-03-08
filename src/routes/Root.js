import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo-min.png';
import cartIcon from '../assets/Icon-Shopping.svg';
import CartSlide from '../components/CartSlide.js';
import ScrollToTop from '../components/ScrollToTop';
import mallows from '../mallows.js';

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

  const [showSlideCart, setShowSlideCart] = useState(false);
  
  return (
    <>
      <ScrollToTop />
      {showSlideCart && <div className="fade-screen"></div>}
      <header>
        <div className="logo" onClick={() => navigate('/')}>
          <img src={logo} alt="squishmallow logo" />
        </div>
        <nav>
          <button
            className="header--cart-button"
            type="button"
            onClick={() => setShowSlideCart(true)}
          >
            <img src={cartIcon} alt="shopping cart" />
            <div className="header--cart-count">
              {cart.length ? cart.reduce((a, b) => a + +b.qty, 0) : 0}
            </div>
          </button>
        </nav>
      </header>
      <main>
        <Outlet context={{ inventory, setInventory, cart, setCart }} />
      </main>
      <CartSlide
        showSlideCart={showSlideCart}
        setShowSlideCart={setShowSlideCart}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
}
