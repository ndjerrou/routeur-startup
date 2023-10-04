import { createBrowserRouter } from 'react-router-dom';
import Users from './Users';
import HomePage from './HomePage';
import UserDetailPage from './UserDetailPage';
import Layout from './Layout';

const routeur = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: 'users', element: <Users /> },
      { path: 'users/:id', element: <UserDetailPage /> },
    ],
  },
]);

export { routeur };
