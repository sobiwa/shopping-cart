import './App.css';
import Root from './routes/Root';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Error from './routes/Error';
import Item from './routes/Item';
import Cart from './routes/Cart';
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: 'items/:itemId',
        element: <Item />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
