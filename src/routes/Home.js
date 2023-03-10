import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

import fifi from '../assets/premium/fifi.png';
import lola from '../assets/premium/lola.png';
import wyatt from '../assets/premium/wyatt.png';
import wanda from '../assets/premium/wanda.png';
import steele from '../assets/premium/steele.png';

export default function Home() {
  const navigate = useNavigate();
  const { setCart } = useOutletContext();
  const [imagesLoaded, setImagesLoaded] = useState([
    { name: 'fifi', loaded: false },
    { name: 'lola', loaded: false },
    { name: 'wyatt', loaded: false },
    { name: 'wanda', loaded: false },
    { name: 'steele', loaded: false },
  ]);

  const styles = imagesLoaded.every((item) => item.loaded)
    ? { opacity: 1 }
    : { opacity: 0 };

  const changeLoadStatus = (name) => {
    setImagesLoaded((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, loaded: true } : item
      )
    );
  };

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
            <img
              style={styles}
              onLoad={() => changeLoadStatus('wanda')}
              src={wanda}
              alt="lovely wanda"
            />
          </div>
          <div
            onClick={() => navigate('./items/Steele')}
            className="home--image"
          >
            <img
              style={styles}
              onLoad={() => changeLoadStatus('steele')}
              src={steele}
              alt="Steele"
            />
          </div>
        </div>
        <div className="home--row2">
          <div onClick={() => navigate('./items/Fifi')} className="home--image">
            <img
              style={styles}
              onLoad={() => changeLoadStatus('fifi')}
              src={fifi}
              alt="Fifi"
            />
          </div>
          <div
            onClick={() => navigate('./items/Wyatt')}
            className="home--image"
          >
            <img
              style={styles}
              onLoad={() => changeLoadStatus('wyatt')}
              src={wyatt}
              alt="Wyatt"
            />
          </div>
          <div onClick={() => navigate('./items/Lola')} className="home--image">
            <img
              style={styles}
              onLoad={() => changeLoadStatus('lola')}
              src={lola}
              alt="lola"
            />
          </div>
        </div>
      </div>
      <button style={styles} className="home--shop-link" onClick={() => navigate('/shop')}>
        Shop All
      </button>
    </div>
  );
}
