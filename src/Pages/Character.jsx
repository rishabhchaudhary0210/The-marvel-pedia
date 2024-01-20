/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import marvelLogo from "./../assets/marvel-logo.jpg";
import Loader from "../Components/Loader";
// import.meta.env.query;

export default function Character() {
    const { kind } = useParams();
    const [charData, setCharData] = useState('');
    const [show, setShow] = useState(false);
    const [offset, setOffset] = useState(0);

    // eslint-disable-next-line no-unused-vars
    useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

    useEffect(() => {
        const getData = async () => {
            console.log('Api Called');
            setShow(false);
            const response = await fetch(`https://gateway.marvel.com:443/v1/public/${kind}${import.meta.env.VITE_QUERY}&offset=${offset * 20}`);
            const resdata = await response.json();
            setCharData(resdata.data.results);
            setShow(true);
            // console.log(resdata);
            console.log(charData);
        }
        getData();
        console.log(marvelLogo);
    }, [offset, kind]);

    return (
        <div
            className="  bg-slate-50 min-h-screen w-4/5 relative grow z-0"
        >
            {!show && <Loader />}
            {show && <>
                <h1 className="text-3xl sm:text-5xl font-mono font-extrabold mt-8 mx-12 pb-2 tracking-widest border-b border-solid border-slate-400">
                    {kind.toUpperCase()}</h1>

                <div className="w-full text-xl mt-6 flex justify-center items-start gap-3">
                    <button
                        className="rounded-lg bg-slate-100 hover:bg-slate-200 px-4 py-1 flex justify-center items-center"
                        disabled={offset === 0}
                        onClick={() => { setOffset(offset - 1); setShow(false) }}>
                        -
                    </button>
                    <h4 className="text-2xl">{offset + 1}</h4>
                    <button
                        className="rounded-lg bg-slate-100 hover:bg-slate-200 px-4 py-1 flex justify-center items-center"
                        onClick={() => { setOffset(offset + 1); setShow(false) }}>
                        +
                    </button>
                </div>
                <div className="flex flex-wrap justify-around">
                    {charData.map(ele =>
                        <CharacterCard
                            key={ele?.id}
                            eleData={ele}
                            kind={kind}
                        />
                    )}
                </div></>}
        </div>
    );
}

const CharacterCard = (props) => {
    const [fillHeart, setFillHeart] = useState(false);
    return (
        <div className="bg-white mx-1 sm:mx-4 rounded-xl flex w-80 justify-center items-start p-4 shadow-xl  hover:scale-105 transition-all my-8 relative" >

            <div className="bg-white shadow-md rounded-full h-10 w-10 text-xl flex justify-center items-center absolute top-56 right-3 cursor-pointer">
                {
                    fillHeart ?
                        <IconHeartFill fill="red" onClick={() => setFillHeart(!fillHeart)} />
                        : <IconHeart onClick={() => setFillHeart(!fillHeart)} />
                }
            </div>

            <Link to={`/${props?.kind}/${props?.eleData?.id}`}>


                {props?.eleData?.thumbnail?.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ?
                    <img
                        src={marvelLogo}
                        alt="img"
                        className="w-72 h-60 mb-4 rounded-lg"
                    /> :
                    <img
                        src={(props?.eleData?.thumbnail?.path + "." + props?.eleData?.thumbnail?.extension)}
                        alt="img"
                        className="w-72 h-60 mb-4 rounded-lg"
                    />

                }

                <div className="flex flex-col justify-center items-center px-3">
                    <h3 className="text-xl font-extrabold mb-2">
                        {props?.eleData?.name || props?.eleData?.title || props?.eleData?.fullName}
                    </h3>
                    <h4 className="text-slate-400 text-lg font-semibold ">
                        {props?.eleData?.id}
                    </h4>
                </div>

                {/* {(props?.kind === 'series') ?
                    <h5>{props?.eleData?.startYear + ' - ' + props?.eleData?.endYear}</h5>
                    :
                    ''}

                <p>{(typeof(props?.eleData?.description) === 'string' && props?.eleData?.description.length > 0) ?
                    (props?.eleData?.description?.substring(0, 30)+"...")
                    :
                    null}</p> */}

            </Link>
        </div>
    );
}

function IconHeart(props) {
    return (
        <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
            className="hover:fill-red-500"
        >
            <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
        </svg>
    );
}

function IconHeartFill(props) {
    return (
        <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            {...props}
        >
            <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z" />
        </svg>
    );
}