import { useNavigate } from 'react-router-dom';

import fifi from '../assets/premium/fifi.png';
import lola from '../assets/premium/lola.png';
import wyatt from '../assets/premium/wyatt.png';
import wanda from '../assets/premium/wanda.png';
import steele from '../assets/premium/Steele-1.png';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home--main">
      <div className="home--squish-container">
        <div className="home--row1">
          <div className="home--image">
            <img src={wanda} />
          </div>
          <div className="home--image">
            <img src={steele} />
          </div>
        </div>
        <div className="home--row2">
          <div className="home--image">
            <img src={fifi} />
          </div>
          <div className="home--image">
            <img src={wyatt} />
          </div>
          <div className="home--image">
            <img src={lola} />
          </div>
        </div>
      </div>
      <button className='home--shop-link' onClick={() => navigate('/shop')}>Shop All</button>
    </div>
  );
}
