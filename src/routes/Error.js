import bongo404 from '../assets/bongo404.png';

export default function Error() {
  return (
    <div className="error-page">
      Oops, something went wrong!
      <div className="error-page--img">
        <img src={bongo404} alt="bongo sad" />
      </div>
    </div>
  );
}
