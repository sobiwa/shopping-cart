import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo-min.png';
import cartIcon from '../assets/Icon-Shopping.svg';

export default function Root() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div className="logo" onClick={() => navigate('/')}>
          <img src={logo} alt="squishmallow logo" />
        </div>
        <nav>
          <button className="header--cart-button" type="button">
            <img src={cartIcon} alt="shopping cart" />
          </button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
