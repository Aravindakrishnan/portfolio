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
import Navbar from './components/Navbar/Navbar';
import Projects from "./components/Projects/Projects";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // errorElement: ErrorPage
  },
  {
    path: "/projects",
    element: <Projects ></Projects>,
    // errorElement: ErrorPage
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar></Navbar>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
