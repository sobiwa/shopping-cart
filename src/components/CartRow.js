import { useState } from 'react';
import x from '../assets/x.svg';
import bongo from '../assets/bongo404.png';

export default function CartRow({
  name,
  removeItem,
  image,
  size,
  price,
  qty,
  stock,
  setCart,
}) {
  const [qtyError, setQtyError] = useState(false);
  const [removal, setRemoval] = useState(false);

  const displayQtyError = () => {
    setQtyError(true);
    setTimeout(() => {
      setQtyError(false);
    }, 3000);
  };

  const handleChange = (e) => {
    if (e.target.value <= stock && e.target.value > 0) {
      setCart((prev) =>
        prev.map((item) =>
          item.product.name === name ? { ...item, qty: +e.target.value } : item
        )
      );
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === name ? { ...item, qty: 1 } : item))
    );
    displayQtyError();
  };

  const decrement = () => {
    if (qty < 2) return;
    setCart((prev) =>
      prev.map((item) =>
        item.product.name === name ? { ...item, qty: +item.qty - 1 } : item
      )
    );
  };

  const increment = () => {
    if (qty >= stock) {
      displayQtyError();
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.name === name ? { ...item, qty: +item.qty + 1 } : item
      )
    );
  };

  return (
    <tr key={name} className="cart--item-row" style={{opacity: removal ? 0.5 : 1}}>
      <td className='cart--remove-container'>
        <button
          onMouseEnter={() => setRemoval(true)}
          onMouseLeave={() => setRemoval(false)}
          title="Remove item from cart"
          onClick={removeItem}
          type="button"
          className="cart--remove"
        >
          <img src={x} alt="remove item" />
        </button>
      </td>
      <td className='cart--item-img-container'>
        <img className="cart--item-img" src={image} alt={name} />
      </td>
      <td className='cart--item-name'>{`${name} - ${size.toString().length < 5 ? `${size}"` : 'Combo Pack'}`}</td>
      <td className='cart--item--price dash-bottom'>{`$${price}`}</td>
      <td className='item--qty-container dash-bottom'>
        <form className="item--qty-form">
          <div className="item--qty">
            <span
              className="qty-error"
              style={{ opacity: qtyError ? '0.7' : '0' }}
            >
              <img src={bongo} alt="bongo!" height="20px" /> Limited stock
              available
            </span>
            <button className="qty-minus" type="button" onClick={decrement}>
              -
            </button>
            <input
              onChange={handleChange}
              value={qty}
              type="number"
              min="1"
              max={stock}
            />
            <button className="qty-plus" type="button" onClick={increment}>
              +
            </button>
          </div>
        </form>
      </td>
      <td className='item--sub-total'>
        {`$${Math.round((price * qty) * 100) / 100}`}
      </td>
    </tr>
  );
}
