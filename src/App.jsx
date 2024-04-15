
import './App.css';
import Navbar from './Components/Navbar';

import { Outlet, Link } from 'react-router-dom';


function App() {
  return (
    <div 
      className='bg-slate-50 min-h-screen flex justify-center items-start '
    >
      <Navbar/>
      <Outlet />

    </div>
  )
}

export default App;
