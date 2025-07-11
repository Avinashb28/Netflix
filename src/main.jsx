import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import SignUp from './components/SignUp.jsx';
import Authentication from './components/Authentication.jsx';
import AuthHelp from './components/AuthHelp.jsx';

const RouterPage = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        index: true,
        element: <SignUp/>,
      }, 
          {
            path: '/AuthHelp',
            element:  <AuthHelp/>,
          },
         
    
      {
        path: '/Authentication',
        element: <Authentication />,
      },
       
    ],
    errorElement: <Error />,
  },
]);
createRoot(document.getElementById('root')).render(
   <RouterProvider router={RouterPage } />
)

