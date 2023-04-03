import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// components
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/projects",
    element: <Card></Card>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar></Navbar>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
