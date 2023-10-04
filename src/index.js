import { createRoot } from 'react-dom/client';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { routeur } from './routing/routes';

createRoot(document.querySelector('#root')).render(
  <RouterProvider router={routeur}>
    <App />
  </RouterProvider>
);
