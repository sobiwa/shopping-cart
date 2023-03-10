import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { useParams, useOutletContext, useNavigate } from 'react-router-dom';
import randomColor from '../colors';
import formatDate from '../helpers/formatDate';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';
import bongo from '../assets/bongo404.png';

export default function Item() {
  const { inventory, setCart } = useOutletContext();

  const navigate = useNavigate();

  const params = useParams();
  const { itemId } = params;
  const mallow = inventory.find((item) => item.name === itemId);

  const [imageContainerSize, setImageContainerSize] = useState(null);
  const [imgRoll, setImgRoll] = useState(0);
  const [hover, setHover] = useState(false);
  const [nameColor] = useState(randomColor());
  const [qty, setQty] = useState(1);
  const [qtyError, setQtyError] = useState(false);
  const [tickle, setTickle] = useState(false);

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

  const animateTickle = () => {
    setTickle(true);
    setTimeout(() => {
      setTickle(false);
    }, 350);
  };

  useEffect(() => {
    window.addEventListener('resize', windowResize);
    return () => window.removeEventListener('resize', windowResize);
  }, []);

  useLayoutEffect(() => {
    setImageContainerSize(imageContainer.current.clientWidth);
  }, []);

  // adds length * vw to size so more images don't get too small
  const smallImgSize = `calc(${
    (imageContainerSize * 0.35) / mallow.image.length
  }px + ${mallow.image.length}vw)`;

  const displayQtyError = () => {
    setQtyError(true);
    setTimeout(() => {
      setQtyError(false);
    }, 3000);
  };

  const handleChange = (e) => {
    if (
      (e.target.value <= mallow.runningStock && e.target.value > 0) ||
      e.target.value === ''
    ) {
      setQty(e.target.value);
      return;
    }
    setQty(1);
    displayQtyError();
  };

  const decrement = () => {
    if (qty < 2) return;
    setQty((prev) => +prev - 1);
  };

  const increment = () => {
    if (qty >= mallow.runningStock) {
      displayQtyError();
      return;
    }
    setQty((prev) => +prev + 1);
  };

  const addToCart = () => {
    setCart((prev) => {
      if (prev.some((item) => item.product.name === mallow.name)) {
        return prev.map((item) =>
          item.product.name === mallow.name
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }
      return [...prev, { product: mallow, qty: qty, newlyAdded: true }];
    });
    navigate('/cart');
  };

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
              {mallow.image.map((img, index) => (
                <img
                  key={`image-roll-${index}`}
                  onClick={animateTickle}
                  className={tickle ? 'alt-effect' : ''}
                  src={img}
                  alt={mallow.name}
                />
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
                maxHeight: hover ? smallImgSize : 0,
              }}
              className="item--image-selector"
            >
              {mallow.image.map((pic, index) => (
                <img
                  key={index}
                  src={pic}
                  alt={mallow.name}
                  style={{
                    width: smallImgSize,
                    maxHeight: '100%',
                    opacity: imgRoll / -100 === index ? 1 : 0.5,
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
              <div>
                {mallow.size.toString().length < 3
                  ? `${mallow.size}"`
                  : `${mallow.size}`}
              </div>
            </div>
          )}
          <div className="item--price-container">
            {mallow.runningStock > 0 ? (
              <div className="item--in-stock">In stock</div>
            ) : (
              <div className="item--out-of-stock">Out of stock</div>
            )}
            <div className="item--price">{`$${mallow.price}`}</div>
            {mallow.runningStock > 0 && (
              <div className="item--acquisition">
                <form className="item--qty-form">
                  <div className="item--qty">
                    <span
                      className="qty-error"
                      style={{ opacity: qtyError ? '0.7' : '0' }}
                    >
                      <img src={bongo} alt="bongo!" height="20px" /> Limited
                      stock available
                    </span>
                    <input
                      type="button"
                      value="-"
                      className="qty-minus"
                      onClick={decrement}
                    />
                    <input
                      data-testid="item-qty-input"
                      onChange={handleChange}
                      value={qty}
                      type="number"
                      min="1"
                      max={mallow.runningStock}
                    />
                    <input
                      type="button"
                      value='+'
                      className="qty-plus"
                      onClick={increment}
                    />
                  </div>
                  <button
                    onClick={addToCart}
                    className="add-to-cart"
                    type="button"
                  >
                    ADD TO CART
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
