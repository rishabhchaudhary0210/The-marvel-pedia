import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    const [expandNav, setExpandNav] = useState(true);
    const navRef = useRef(null);

    useEffect(()=>{
        const HandleClickOutside = (e)=>{
            if(navRef.current && !navRef.current.contains(e.target)){
                setExpandNav(false);
            }
        }
        document.addEventListener('mousedown', HandleClickOutside);
        return () => { document.removeEventListener('mousedown', HandleClickOutside); };
    },[]);


    const LinkActiveClass = "bg-slate-200 px-4 py-3 w-full flex text-slate-400 items-start border-l-4 border-solid border-purple-500";
    const LinkStyleClass = "px-4 py-3 w-full flex items-start text-slate-400 hover:text-purple-500 hover:translate-x-3 transition-transform duration-300";
    // before:content-[""] before:bg-purple-500  before:block before:h-1 before:w-0 before:rounded-xl hover:before:w-full
    const LinkContClass = 'flex gap-4 justify-center items-center transition-all duration-300';

    return (
        <div ref={navRef} 
        className={`box-border overflow-hidden transition-all duration-200 sm:sticky left-0 top-0 flex flex-col min-h-screen border-2 items-start gap-8 text-lg text-slate-600 font-semibold z-10 tracking-wider py-6 ${expandNav ? " px-5 xl:w-1/5 md:w-1/3 sm:w-3/5 w-4/5 fixed bg-slate-50" : "sticky w-14 px-1"} `}>

            {!expandNav && <IconBxMenuAltLeft className="mx-auto h-6 w-8 cursor-pointer text-slate-400 hover:text-purple-500" onClick={()=>setExpandNav(!expandNav)}/>}
            {expandNav && <IconCross className="text-right h-6 w-8 cursor-pointer text-slate-400 hover:text-purple-500" onClick={()=>setExpandNav(!expandNav)}/>}
            {/* <div> */}
            <NavLink to={`/`} activeclassname="bg-red-500 text-green-600" className={({ isActive, isPending }) => isPending ? LinkStyleClass : isActive ? LinkActiveClass : LinkStyleClass} >
                <div className={LinkContClass} onClick={()=>setExpandNav(false)}>
                    <IconHome />
                    HOME
                </div>
            </NavLink>
            <NavLink to={`/characters`} className={({ isActive, isPending }) => isPending ? LinkStyleClass : isActive ? LinkActiveClass : LinkStyleClass}>
                <div className={LinkContClass} onClick={()=>setExpandNav(false)}>
                    <IconPersonFill />
                    CHARACTERS
                </div>
            </NavLink>
            <NavLink to={`/comics`} className={({ isActive, isPending }) => isPending ? LinkStyleClass : isActive ? LinkActiveClass : LinkStyleClass}> 
                <div className={LinkContClass} onClick={()=>setExpandNav(false)}>
                    <IconBook />
                    COMICS
                </div>
            </NavLink>
            <NavLink to={`/series`} className={({ isActive, isPending }) => isPending ? LinkStyleClass : isActive ? LinkActiveClass : LinkStyleClass}>
                <div className={LinkContClass} onClick={()=>setExpandNav(false)}>
                    <IconBxsMovie />
                    SERIES
                </div>
            </NavLink>
            <NavLink to={`/search`} className={({ isActive, isPending }) => isPending ? LinkStyleClass : isActive ? LinkActiveClass : LinkStyleClass}>
                <div className={LinkContClass} onClick={()=>setExpandNav(false)}>
                    <IconBxsSearchAlt2 />
                    SEARCH
                </div>
            </NavLink>
            {/* </div> */}
        </div>
    )
}

export default Navbar;
function IconBxMenuAltLeft(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z" />
    </svg>
  );
}
function IconCross(props) {
    return (
      <svg
        viewBox="0 0 21 21"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15.5 15.5l-10-10zM15.5 5.5l-10 10" />
        </g>
      </svg>
    );
  }
function IconHome(props) {
    return (
        <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M946.5 505L534.6 93.4a31.93 31.93 0 00-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z" />
        </svg>
    );
}
function IconPersonFill(props) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
    );
}
function IconBook(props) {
    return (
        <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM668 345.9L621.5 312 572 347.4V124h96v221.9z" />
        </svg>
    );
}
function IconBxsMovie(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.466l-2.667-4H20l.001 4zm-5.466 0l-2.667-4h2.596l2.667 4h-2.596zm-2.404 0H9.535L6.869 5h2.596l2.666 4zM4 5h.465l2.667 4H4V5z" />
        </svg>
    );
}
function IconBxsSearchAlt2(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M9 16c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604-1.392-1.358a35.13 35.13 0 01-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.967 6.967 0 0016 9c0-3.859-3.141-7-7-7S2 5.141 2 9s3.141 7 7 7z" />
        </svg>
    );
}