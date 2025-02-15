import React from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { About } from './pages/about';
import { Country } from './pages/country';
import { AppLayout } from './components/Layout/AppLayout';
import { Error } from './pages/Error';
import { CountryDetailes } from './components/Layout/CountryDetailes';

const router = createBrowserRouter([

  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children:[

      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "country",
        element: <Country />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "country/:id",
        element: <CountryDetailes />
      }
    ]
  }
 
 
])



const App = () => {
  return <RouterProvider router={router}></RouterProvider>

     
    
  
};

export default App;