/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import marvelLogo from "./../assets/marvel-logo.jpg";

export default function Resource(props) {

    const [resData, setResData] = useState();

    useEffect(() => {
        const func = async () => {

            const res = await fetch(props.resourceURI + import.meta.env.VITE_QUERY);
            const apidata = await res.json();

            let obj = {
                id: apidata.data.results[0].id,
                name: apidata.data.results[0].title || apidata.data.results[0].name || apidata.data.results[0].fullName,
                img: apidata.data.results[0].thumbnail?.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? marvelLogo : (apidata.data.results[0].thumbnail?.path + '.' + apidata.data.results[0].thumbnail?.extension),
                description: apidata.data.results[0]?.description
            }
            setResData(obj);
        }
        func();
    }, [])

    return (
        <div>
            {!resData && <h1>LOADING!!!</h1>}
            {resData &&
                <NavLink to={`/${props.kind}/${resData.id}`}>
                    <div className="bg-white m-4 flex justify-start items-center flex-col p-4 rounded-lg shadow-lg w-72 h-[95%] hover:scale-105 transition-all">
                        <h4 className="text-lg text-slate-400">#{resData.id}</h4>
                        <h4 className="text-xl font-extrabold">{resData.name || resData.title || resData.fullName}</h4>
                        <img src={resData.img} alt="thumbnail" 
                        className=" h-54 w-60 rounded-lg mt-2"/>
                        <p>
                            {
                                (typeof (resData.description) === 'string') ?
                                    resData.description.substring(0, 35)+"..."
                                    :
                                    null
                            }
                        </p>
                    </div>
                </NavLink>
            }

        </div>
    )
}