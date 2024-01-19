/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import marvelLogo from "./../assets/marvel-logo.jpg";
import Loader from "./../Components/Loader.jsx";
import { Link } from "react-router-dom";

export default function Search() {

    const [choice, setChoice] = useState('characters');
    const [inputVal, setInputVal] = useState("");
    const [searchRes, setSearchVal] = useState([]);
    const [show, setShow] = useState(false);
    function handleInputChange(e) {
        let val = e.target.value;
        // console.log(val);
        setShow(false);
        const arr = val.split(" ");
        setInputVal(arr.join('%20'));
    }

    useEffect(() => {
        const getData = setTimeout(async () => {
            console.log("Search called")
            setShow(false);
            const res = await fetch(`https://gateway.marvel.com:443/v1/public/${choice}${import.meta.env.VITE_QUERY}&${(choice === 'characters' || choice === 'creators' || choice === 'events') ? "nameStartsWith" : "titleStartsWith"}=${inputVal}`);

            const resData = await res.json();
            setSearchVal(resData.data.results);
            console.log(resData.data.results);
            setShow(true);
        }, 2000);

        return () => clearTimeout(getData);
    }, [choice, inputVal])


    return (
        <div className="bg-slate-50 min-h-screen w-4/5 grow relative ">
            <h1 className="text-5xl font-mono font-extrabold mt-8 mx-12 pb-2 tracking-widest border-b border-solid border-slate-400"> Search </h1>
            <div className="flex justify-center items=center gap-2 mt-10 mb-2">
                <select name="" id="" onChange={(e) => { setChoice(e.target.value); setShow(false) }}
                    className="h-20 w-1/5 rounded-l-2xl px-6 outline-none text-xl"
                >
                    <option value="characters">Characters</option>
                    <option value="comics">Comics</option>
                    <option value="series">Series</option>
                    {/* <option value="events">Events</option> */}
                    <option value="creators">Creators</option>
                </select>
                <input type="text" placeholder="Search Here" onChange={handleInputChange}
                    className="h-20 w-3/5 rounded-r-2xl px-6 outline-none text-xl"
                />
            </div>
            {/* <div>
                searchVal = {inputVal}
                <hr />
                choice = {choice}
            </div> */}
            {/* {!show && <Loader />} */}
            {/* {show && <div> */}
                <div className="bg-white absolute right-28 w-3/5 max-h-96 overflow-y-scroll scrollbar-track-slate-200 scrollbar-thumb-slate-400 scrollbar-thin scrollbar-thumb-rounded-xl ">
            {show &&
                searchRes?.map((m, index) => <SearchListItem key={index} data={m} kind={choice} />)
            }
            {
                show && searchRes.length === 0 && 
                    <h3 className="text-4xl text-slate-400 flex justify-center items-center h-20">
                        No Results Found
                    </h3>
            }
            </div>
            {/* </div>} */}
        </div>
    );
}

const SearchListItem = (props) => {

    return (
        <Link to={`/${props?.kind?.toLowerCase()}/${props?.data?.id}`} className="">
            <div className="bg-white w-full border-b-2 px-6 py-2 border-solid flex justify-between items-center hover:bg-slate-200 my-1 rounded-lg">
                {props?.data?.thumbnail?.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ?
                    <img
                        src={marvelLogo}
                        alt="img"
                        className="w-16 h-16  rounded-full"
                    /> :
                    <img
                        src={(props?.data?.thumbnail?.path + "." + props?.data?.thumbnail?.extension)}
                        alt="img"
                        className="w-16 h-16  rounded-full"
                    />

                }
                <div className="text-right">
                    <h1 className="text-lg ">
                        {props?.data?.name || props?.data?.title || props?.data?.fullName}
                    </h1>
                    <h3 className="text-md text-slate-500">
                        {'#' + props?.data?.id}
                    </h3>
                </div>
            </div>
        </Link>
    )
}