
import './App.css';
import Navbar from './Components/Navbar';
// import Fetch from './Components/FetchCard/fetch';
// import SingleChar from './Components/FetchCard/singleChar';
// import Comics from './Pages/Comics/Comics';
// import Series from './Pages/Series/Series';
// import Character from './Pages/Character/Character';
// import UniCharacter from './Pages/UniChar/UniCharacter';
// import UniComic from './Pages/UniComic/UniComic';
// import UniSeries from './Pages/UniSeries/UniSeries';

import { Outlet, Link } from 'react-router-dom';


function App() {
  return (
    <div 
      className='bg-slate-50 min-h-screen flex '
    >
      <Navbar/>
      <Outlet />


      {/* <Character kind="series"/> */}
      {/* <Comics /> */}
      {/* <Series/> */}
      {/* <UniCharacter kind="characters" id="1010354"/> */}
      {/* <UniCharacter kind="comics" id="105921"/> */}
      {/* <UniCharacter kind="series" id="20018"/> */}
      {/* <UniComic id="105920"/> */}
      {/* <UniSeries id="20018"/> */}
      {/* <SingleChar id="1009368"/> */}
    </div>
  )
}

export default App;
