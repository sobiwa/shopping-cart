import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/squish-logo.png';

export default function Root() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <div 
        className='logo'
        onClick={() => navigate('/')}>
          <img src={logo} alt='squishmallow logo' />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}