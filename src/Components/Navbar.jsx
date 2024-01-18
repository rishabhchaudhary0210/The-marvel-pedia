import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const LinkStyleClass = "hover:text-red-100 active:text-green-100";
    return (
        <div className="flex flex-col items-start py-12 px-8 gap-8 text-xl text-slate-700 font-semibold  tracking-wider w-1/6 h-screen bg-slate-100 shadow-2xl border-r-2 border-solid border-slate-600">
            <Link to={`/`}   className={LinkStyleClass}> HOME </Link>
            <NavLink to={`/characters`} className={LinkStyleClass}> CHARACTERS </NavLink>
            <Link to={`/comics`} className={LinkStyleClass}> COMICS </Link>
            <Link to={`/series`} className={LinkStyleClass}> SERIES </Link>
            <Link to={`/search`} className={LinkStyleClass}>SEARCH</Link>
        </div>
    )
}

export default Navbar;
