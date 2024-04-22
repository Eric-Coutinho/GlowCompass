import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import Form from './pages/Form.jsx';
import './index.css'
import Componentes from './pages/Componentes.jsx';
import Nav from './Components/Nav.jsx'

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
    <Nav />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
