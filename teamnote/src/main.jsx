import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './component/login/login.jsx'
import Signup from './component/login/signup.jsx'
import Dashboard from './component/dashboard/dashboard.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    
  },
   
  {
      path: "/signup",
      element: <Signup />,
  },
  {
    path: "/login",
    element: <Login/>,
},

    
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)