import Card from '../components/Card';
import mallows from '../mallows';

export default function Shop() {
  return (
    <>
      <div className="shop--items-container">
        {mallows.map((mallow) => (
          <Card key={mallow.name} name={mallow.name} image={mallow.image} />
        ))}
      </div>
    </>
  );
}
