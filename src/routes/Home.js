import { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

import fifi from '../assets/premium/fifi.png';
import lola from '../assets/premium/lola.png';
import wyatt from '../assets/premium/wyatt.png';
import wanda from '../assets/premium/wanda.png';
import steele from '../assets/premium/steele.png';

export default function Home() {
  const navigate = useNavigate();
  const { setCart } = useOutletContext();

  useEffect(() => {
    setCart((prev) => prev.map((item) => ({ ...item, newlyAdded: false })));
  }, []);

  return (
    <div className="home--main">
      <div className="home--squish-container">
        <div className="home--row1">
          <div
            onClick={() => navigate('./items/Wanda')}
            className="home--image"
          >
            <img src={wanda} alt="lovely wanda" />
          </div>
          <div
            onClick={() => navigate('./items/Steele')}
            className="home--image"
          >
            <img src={steele} alt="Steele" />
          </div>
        </div>
        <div className="home--row2">
          <div onClick={() => navigate('./items/Fifi')} className="home--image">
            <img src={fifi} alt="Fifi" />
          </div>
          <div
            onClick={() => navigate('./items/Wyatt')}
            className="home--image"
          >
            <img src={wyatt} alt="Wyatt" />
          </div>
          <div onClick={() => navigate('./items/Lola')} className="home--image">
            <img src={lola} alt="lola" />
          </div>
        </div>
      </div>
      <button className="home--shop-link" onClick={() => navigate('/shop')}>
        Shop All
      </button>
    </div>
  );
}
