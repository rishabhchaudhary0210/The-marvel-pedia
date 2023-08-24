import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Character from './Pages/Character/Character';
import UniCharacter from './Pages/UniChar/UniCharacter';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error Recieved</div>,

  },
  {
    path: "/:kind",
    element: <Character />,
    errorElement: <div>Error Recieved</div>,
  },
  {
    path: "/:kind/:id",
    element: <UniCharacter />,
    errorElement: <div>Error Recieved</div>,
  },


  // {
  //   path: "/characters/:charID",
  //   element: <App kind="characters" id={params.charID}/>,
  // },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
