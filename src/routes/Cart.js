import { useOutletContext, useNavigate } from 'react-router-dom';
import cartIcon from '../assets/cart.svg';
import CartRow from '../components/CartRow';
import roundTo2 from '../helpers/roundTo2';

export default function Cart() {
  const { cart, setCart, inventory, setInventory } = useOutletContext();
  const navigate = useNavigate();
  const subTotal = cart.reduce(
    (acc, curr) =>
      Math.round((acc + curr.qty * curr.product.price) * 100) / 100,
    0
  );
  const shipping = 9.99;
  const tax = 0.08125;

  const removeItem = (cartItem) => {
    setInventory((prev) =>
      prev.map((item) =>
        item.name === cartItem.product.name
          ? { ...item, runningStock: item.runningStock + cartItem.qty }
          : item
      )
    );
    setCart((prev) =>
      prev.filter((item) => item.product.name !== cartItem.product.name)
    );
  };

  const salesTax = roundTo2(subTotal * tax);

  return (
    <div className="cart-page">
      {cart.length ? (
        <div className="cart--details">
          <div class="cart--items-wrapper">
            <table className="cart--items">
              <thead>
                <tr>
                  <th className="cart--remove-column"></th>
                  <th></th>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const { name, size, image, price, stock } = item.product;
                  return (
                    <CartRow
                      name={name}
                      removeItem={() => removeItem(item)}
                      size={size}
                      image={image[0]}
                      price={price}
                      qty={item.qty}
                      stock={stock}
                      setCart={setCart}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="cart--totals">
            <table>
              <thead>
                <tr>
                  <th>CART TOTALS</th>
                </tr>
                <tr>
                  <td className="cart--totals--data cart--totals--heading">
                    SUBTOTAL
                  </td>
                  <td className="cart--totals--data totals-price">{`$${subTotal}`}</td>
                </tr>
                <tr>
                  <td className="cart--totals--data cart--totals--heading">
                    SHIPPING
                  </td>
                  <td className="cart--totals--data totals-price highlight">{`$${shipping}`}</td>
                </tr>
                <tr>
                  <td className="cart--totals--data cart--totals--heading">
                    TAX
                  </td>
                  <td className="cart--totals--data totals-price highlight">{`$${salesTax}`}</td>
                </tr>
                <tr>
                  <td className="cart--totals--heading">TOTAL</td>
                  <td className="totals-price highlight large">{`$${roundTo2(
                    subTotal + shipping + +salesTax
                  )}`}</td>
                </tr>
              </thead>
            </table>
            <button className="checkout-button" type="button">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      ) : (
        <div className="cart-empty-page">
          <img src={cartIcon} alt="cart empty" />
          <div className="cart-empty-text">Your cart is currently empty</div>
          <button type="button" onClick={() => navigate('/shop')}>
            RETURN TO SHOP
          </button>
        </div>
      )}
    </div>
  );
}
