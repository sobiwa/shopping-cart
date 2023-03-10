import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import randomColor from '../helpers/colors';

export default function Card({ name, image, outOfStock }) {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [bgColor] = useState(randomColor());
  const imgSrc = image.length < 2 || hover ? image[0] : image[1];

  return (
    <div className="shop--card" onClick={() => navigate(`/items/${name}`)}>
      <div className="shop--img-wrapper">
        <div
          className="shop--img-container"
          style={{
            backgroundColor: bgColor,
          }}
        >
          <img
            onLoad={() => setLoaded(true)}
            style={{
              translate: loaded ? '0' : '0 -100%',
            }}
            className={hover ? 'alt-effect' : ''}
            src={imgSrc}
            alt={name}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
        </div>
        {outOfStock && <div className="oos-badge">SOLD OUT</div>}
      </div>
      <div className="shop--name">{name}</div>
    </div>
  );
}
