import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Character from './Pages/Character';
import UniCharacter from './Pages/UniCharacter';
import Search from './Pages/Search';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error Recieved</div>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/:kind",
        element: <Character />,
        // errorElement: <div>Error Recieved</div>,
      },
      {
        path: "/:kind/:id",
        element: <UniCharacter />,
        // errorElement: <div>Error Recieved</div>,
      },{
        path: "/search",
        element: <Search />
      }
    ]

  },


  // {
  //   path: "/characters/:charID",
  //   element: <App kind="characters" id={params.charID}/>,
  // },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
