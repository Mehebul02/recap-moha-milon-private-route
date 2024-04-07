import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import AuthProvider from './provider/AuthProvider';
import Orders from './components/orders/Orders';
import PrivateRoute from './components/private/PrivateRoute';
import Profile from './components/profile/Profile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/orders',
        element:<PrivateRoute><Orders/></PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile/></PrivateRoute>

      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
