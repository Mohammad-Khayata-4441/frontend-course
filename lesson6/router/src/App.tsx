import React, { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { createContext } from 'react';


import Home from './pages/Home';
import About from './pages/About';



// Defining The Router Object 
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />

    },
    {
      path: "/about",
      element: <About />,
    },

  ]

);


// 1. Define the type for the state and updater function
type SetStateType = React.Dispatch<React.SetStateAction<number>>;

// 2. Define the context type as the return type of useState
type ContextType = [number, SetStateType];

// 3. Create a context with default value as undefined
export const counterContext = createContext<ContextType>([0, () => { }]);




export default function App() {

  const countState = useState(0)


  return (
    <div className='app'>


      <counterContext.Provider value={countState}>

        <RouterProvider router={router} />


      </counterContext.Provider>
    </div>
  )
}
