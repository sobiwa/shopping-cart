import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Item from './Item';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

const mock_addToCart = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useOutletContext: () => {
    return {
      inventory: [
        {
          name: 'Wyatt',
          num: 1932,
          birth: new Date('08-24-2022'),
          description: 'Green laughing frog',
          intro:
            'Wyatt loves shooting hoops at home with his big sister, Wendy! These two ‘Mallows play pickup basketball all the way until dinner time. This year, Wyatt became a mathlete, so playing a fun game is just what he needs to stay sharp in between competitions.',
          size: 12,
          price: 19.99,
          image: ['wyatt', 'wyatt2'],
          stock: 5,
          runningStock: 5,
        },
      ],
      setCart: () => {
        mock_addToCart();
      },
    };
  },
  useParams: () => ({ itemId: 'Wyatt' }),
}));

describe('<Item />', () => {
  test('increment', async () => {
    const {user} = renderWithRouter(<Item />, { route: '/items' });
    await user.click(screen.getByText('+'));
    expect(screen.getByTestId('item-qty-input').value).toBe('2');
  });

  test('does not decrement past 1', async () => {
    const {user} = renderWithRouter(<Item />, { route: '/items' });
    await user.click(screen.getByText('-'));
    expect(screen.getByTestId('item-qty-input').value).toBe('1');
  })

  test('decrements', async () => {
    const {user} = renderWithRouter(<Item />, { route: '/items' });
    const incrementBtn = screen.getByText('+')
      await user.click(incrementBtn);
      await user.click(incrementBtn);
      await user.click(screen.getByText('-'));
    expect(screen.getByTestId('item-qty-input').value).toBe('2');
  })

  test('prevents going over stock', async () => {
    const {user} = renderWithRouter(<Item />, { route: '/items' });
    const incrementBtn = screen.getByText('+');
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    expect(screen.getByTestId('item-qty-input').value).toBe('5');
  })

  test('displays "Limited stock available"', async () => {
    const {user} = renderWithRouter(<Item />, { route: '/items' });
    const incrementBtn = screen.getByText('+');
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    expect(screen.getByText('Limited stock available')).toBeVisible();
  })

  test('"Limited stock warning goes away', async () => {
    const {user} = renderWithRouter(<Item />, { route: '/items' });
    const incrementBtn = screen.getByText('+');
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    await waitFor(() => {
      expect(screen.queryByText('Limited stock available')).not.toBeVisible();
    }, {timeout: 3100})
  })

  test('adds to cart', async () => {
    const {user} = renderWithRouter(<Item />, { route: '/items' });
    await user.click(screen.getByText('ADD TO CART'))
    expect(mock_addToCart).toBeCalled();
  })
});

