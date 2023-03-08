import './App.css';
import Root from './routes/Root';
import Home from './routes/Home';
import Shop from './routes/Shop';
import Error from './routes/Error';
import Item from './routes/Item';
import Cart from './routes/Cart';
import mallows from './mallows.js';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

function mallowLoader() {
  return mallows;
}

const router = createBrowserRouter([
  {
    path: '/',
    loader: mallowLoader,
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
        // onLeave: () => {
        //   const { setCart } = useOutletContext();
        //   setCart((prev) =>
        //     prev.map((item) => ({ ...item, newlyAdded: false }))
        //   );
        // },
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
