import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Card from '../components/Card';

export default function Shop() {
  const {inventory, setCart} = useOutletContext();
  
  useEffect(() => {
    setCart((prev) => prev.map((item) => ({ ...item, newlyAdded: false })));
  }, [])
  
  return (
    <>
      <div className="shop--items-container">
        {inventory.map((mallow) => (
          <Card key={mallow.name} name={mallow.name} image={mallow.image} outOfStock={mallow.runningStock < 1}/>
        ))}
      </div>
    </>
  );
}
