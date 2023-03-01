import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../mallows.js';
import randomColor from '../colors';
import formatDate from '../helpers/formatDate';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

export default function Item() {
  const params = useParams();
  const { itemId } = params;
  const mallow = data.find((item) => item.name === itemId);

  const [imageContainerSize, setImageContainerSize] = useState(null);
  const [imgRoll, setImgRoll] = useState(0);
  const [hover, setHover] = useState(false);
  const [nameColor] = useState(randomColor());

  const imageSelectorTracker = useRef(null);
  const imageContainer = useRef(null);

  const rollPosition = {
    translate: `${imgRoll}%`,
  };

  const nextImg = () => {
    if (imgRoll / -100 === mallow.image.length - 1) {
      setImgRoll(0);
      return;
    }
    setImgRoll((prev) => prev - 100);
  };

  const prevImg = () => {
    if (imgRoll === 0) {
      setImgRoll((mallow.image.length - 1) * -100);
      return;
    }
    setImgRoll((prev) => prev + 100);
  };

  const windowResize = () => {
    setImageContainerSize(imageContainer.current.clientWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', windowResize);
    return () => window.removeEventListener('resize', windowResize);
  }, []);

  useLayoutEffect(() => {
    setImageContainerSize(imageContainer.current.clientWidth)
  }, [])

  // adds length * vw to size so more images don't get too small
  const smallImgSize = `calc(${
    (imageContainerSize * 0.35) / mallow.image.length
  }px + ${mallow.image.length}vw)`;

  return (
    <div className="item-page--wrapper">
      <div className="item-page">
        <div
          className="item--images"
          ref={imageContainer}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => setHover(false)}
        >
          <div className="item--image-container">
            <div className="item--image-roll" style={rollPosition}>
              {mallow.image.map((img) => (
                <img src={img} alt={mallow.name} />
              ))}
            </div>
            {mallow.image.length > 1 && (
              <>
                <button
                  className="image-button item--image-left"
                  type="button"
                  onClick={prevImg}
                >
                  <img src={arrowLeft} alt="previous" />
                </button>
                <button
                  className="image-button item--image-right"
                  type="button"
                  onClick={nextImg}
                >
                  <img src={arrowRight} alt="next" />
                </button>
              </>
            )}
          </div>
          {mallow.image.length > 1 && (
            <div
              ref={imageSelectorTracker}
              style={{
                maxHeight: hover
                  ? smallImgSize
                  : 0,
              }}
              className="item--image-selector"
            >
              {mallow.image.map((pic, index) => (
                <img
                  src={pic}
                  alt={mallow.name}
                  style={{
                    width: smallImgSize,
                    maxHeight: '100%',
                    opacity: imgRoll / -100 === index ? 1 : 0.5
                  }}
                  onClick={() => setImgRoll(index * -100)}
                />
              ))}
            </div>
          )}
        </div>
        <div className="item--info">
          <div className="item--name" style={{ color: nameColor }}>
            {mallow.name}
          </div>
          <div className="item--main-info">
            {mallow.num && (
              <div className="item--main-info-part">
                <div>Collector Number</div>
                <div>{`#${mallow.num}`}</div>
              </div>
            )}
            {mallow.birth && (
              <div className="item--main-info-part">
                <div>Squishdate</div>
                <div>{formatDate(mallow.birth)}</div>
              </div>
            )}
          </div>
          {mallow.description && (
            <p className="item--text item--description">{mallow.description}</p>
          )}
          {mallow.intro && (
            <p className="item--text item--intro">{mallow.intro}</p>
          )}
          {mallow.size && (
            <div className="item--size">
              <p>Size</p>
              <div>{mallow.size.toString().length < 3 ? `${mallow.size}"` : `${mallow.size}`}</div>
            </div>
          )}
          <div className='item--price-container'>
            {mallow.stock > 0 ? <div className='item--in-stock'>In stock</div> : <div className='item--out-of-stock'>Out of stock</div>}
            <div className='item--price'>{`$${mallow.price}`}</div>
            {mallow.stock > 0 && (
              <div className='item--acquisition'>
                

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
