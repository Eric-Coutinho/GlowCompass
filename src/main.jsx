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
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
