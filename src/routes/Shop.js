import { useOutletContext } from 'react-router-dom';
import Card from '../components/Card';

export default function Shop() {
  const {inventory} = useOutletContext();
  return (
    <>
      <div className="shop--items-container">
        {inventory.map((mallow) => (
          <Card key={mallow.name} name={mallow.name} image={mallow.image} />
        ))}
      </div>
    </>
  );
}
