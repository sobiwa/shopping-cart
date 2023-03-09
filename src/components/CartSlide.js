import roundTo2 from '../helpers/roundTo2';
import x from '../assets/x.svg';
import cartIcon from '../assets/cart.svg';
import { useNavigate } from 'react-router-dom';

export default function CartSlide({
  showCartSlide,
  setShowCartSlide,
  cart,
  setCart,
}) {
  const navigate = useNavigate();
  return (
    <div className={`cart-slide ${showCartSlide ? 'slide-in' : ''}`}>
      <button
        className="cart-slide--close"
        type="button"
        onClick={() => setShowCartSlide(false)}
      >
        <img src={x} alt="close widget" />
      </button>
      <h1 className="cart-slide--heading">Shopping Cart</h1>
      {cart.length > 0 ? (
        <>
          <div className="cart-slide--items">
            {cart.map((item) => (
              <div className="cart-slide--item">
                <img
                  src={item.product.image[0]}
                  alt={item.product.name}
                  height="60px"
                />
                <div className="cart-slide--item-description">
                  <div className="cart-slide--item-name">
                    {`${item.product.name} - ${
                      item.product.size.toString().length < 5
                        ? `${item.product.size}"`
                        : 'Combo Pack'
                    }`}
                  </div>
                  <div className="cart-slide--item-details">
                    <span className="fade-font">{`${item.qty} ×`}</span>
                    <span className="highlight">{`$${item.product.price}`}</span>
                  </div>
                </div>
                <button
                  className="cart-slide--remove-button"
                  onClick={() =>
                    setCart((prev) =>
                      prev.filter(
                        (cartItem) =>
                          cartItem.product.name !== item.product.name
                      )
                    )
                  }
                  type="button"
                >
                  <img src={x} alt="remove item" />
                </button>
              </div>
            ))}
          </div>
          <div>
            <div className="cart-slide--sub-total">
              <div className="fade-font">SUBTOTAL:</div>
              <div className="x-large">{`$${roundTo2(
                cart.reduce(
                  (acc, curr) => acc + curr.product.price * curr.qty,
                  0
                )
              )}`}</div>
            </div>
            <p
              className="fade-font cart-slide--fine-print"
              style={{ fontSize: '0.6rem' }}
            >
              Shipping, taxes, and discount calculated at checkout.
            </p>
            <div className="cart-slide--buttons">
              <button
                type="button"
                onClick={() => {
                  navigate('/cart');
                  setShowCartSlide(false);
                }}
              >
                VIEW CART
              </button>
              <button
                type="button"
                onClick={() => {
                  window.open('https://squishmallows.com/', '_blank').focus();
                }}
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className='cart-empty-slide'>
          <img className='cart-empty-icon' src={cartIcon} alt="cart empty" />
          <div className="cart-empty-text">Your cart is currently empty</div>
          <button
            className="return-to-shop-button"
            type="button"
            onClick={() => {
              navigate('/shop');
              setShowCartSlide(false);
            }}
          >
            RETURN TO SHOP
          </button>
        </div>
      )}
    </div>
  );
}
