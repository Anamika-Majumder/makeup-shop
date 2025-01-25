import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'

import Apple from './Apple/Apple.jsx';
import Home from './Home/Home.jsx';
import Profile from './Profile/Profile.jsx';
import Contact from './Contact/Contact.jsx';

import Jobdetails from './Jobdetails/Jobdetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Apple></Apple>,
    
 
    children: [
      {
        path:'/',
        element:<Home></Home>
        
      },
      {
        path:'/Profile',
        element:<Profile></Profile>
      },
      {
        path:'/Contact',
        element:<Contact></Contact>
      },
      {
        path: '/job/:id',
        element: <Jobdetails></Jobdetails>   
       
      }
    ]
    
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
)
