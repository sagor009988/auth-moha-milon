import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from 'postcss';
import Home from './Components/Home/Home.jsx';
import MainLayout from './Layout/MainLayout.jsx';
import Login from './Components/LOgin/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider, { AuthContex } from './AuthProvider/AuthProvider.jsx';
import Order from './Order/Order.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>

      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/orders',
        element:<PrivateRoute><Order></Order></PrivateRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>

  </React.StrictMode>,
)
