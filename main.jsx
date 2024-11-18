import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from './src/components/Contact'
import App from './src/components/App'
import Home from './src/components/Home';
import Error from './src/components/Error';
import CountryDetail from './src/components/CountryDetail';

const root = createRoot(document.getElementById('root'))
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      }, {
        path: '/contact',
        element: <Contact/>
      }, {
        path: '/:country',
        element: <CountryDetail/>
      }
    ]
  }
])
 
root.render(
 <RouterProvider router={router}/>
)