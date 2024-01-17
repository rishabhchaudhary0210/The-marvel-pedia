
import './App.css';
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
  const classes = 'bg-[red] text-[green] ';
  return (
    <div 
      className='bg-slate-50'
    >

      <div className={classes}>
        <hr />
        <Link to={`/`}> HOME </Link>
        <hr />
        <hr />
        <Link to={`/characters`}> CHARACTERS </Link>
        <hr />
        <Link to={`/comics`}> COMICS </Link>
        <hr />
        <Link to={`/series`}> SERIES </Link>
        <hr />
        <Link to={`/search`}>SEARCH</Link>
        <hr />
      </div>

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
