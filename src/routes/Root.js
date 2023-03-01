import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import mallows from '../mallows.js';
import logo from '../assets/Logo-min.png';
import cartIcon from '../assets/Icon-Shopping.svg';

export default function Root() {
  const navigate = useNavigate();

  const [inventory, setInventory] = useState(mallows);
  const [cart, setCart] = useState([]);

  return (
    <>
      <header>
        <div className="logo" onClick={() => navigate('/')}>
          <img src={logo} alt="squishmallow logo" />
        </div>
        <nav>
          <button className="header--cart-button" type="button">
            <img src={cartIcon} alt="shopping cart" />
            <div className="header--cart-count">
              {cart.length ? cart.reduce((a, b) => a + b.qty, 0) : 0}
            </div>
          </button>
        </nav>
      </header>
      <main>
        <Outlet context={[inventory, setInventory, cart, setCart]} />
      </main>
    </>
  );
}
