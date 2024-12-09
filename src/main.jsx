import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import  {UserValidation}  from './pages/home/Login-and-Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: '/',
    element: <UserValidation />
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


