import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Form from './pages/FormSkin/FormSkin.jsx';
import './index.css'
import Componentes from './pages/Componentes.jsx';
import NotFound from './pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '/formulario',
    element: <Form/>
  },
  {
    path: '/componentes',
    element: <Componentes/>
  },
  {
    path: '/*',
    element: <NotFound/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
