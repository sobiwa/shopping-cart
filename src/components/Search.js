import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/search.svg';

export default function Search({ stock, exit, isOpen }) {
  const [input, setInput] = useState('');
  const [matchers, setMatchers] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input === '') {
      setMatchers([]);
      return;
    }
    const re = new RegExp(input, 'i');
    setMatchers(
      stock.filter((item) => re.test(item.name) || re.test(item.description))
    );
  }, [input]);

  useEffect(() => {
    setInput('');
  }, [isOpen]);

  return (
    <div className="search--container">
      <div className="search--input-container">
        <input
          type="search"
          placeholder="Search for products"
          value={input}
          onChange={handleChange}
        />
        <img className="search--icon" alt="search" src={searchIcon} />
      </div>

      <ul className="search--results">
        {input !== '' &&
          (matchers.length > 0 ? (
            matchers.map((item) => (
              <li>
                <Link to={`items/${item.name}`} onClick={exit}>
                  <img height="50px" src={item.image[0]} alt={item.name} />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))
          ) : (
            <li>No results found</li>
          ))}
      </ul>
    </div>
  );
}
