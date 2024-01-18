/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Resource from "../Components/Resource";
import { useParams } from "react-router-dom";
import marvelLogo from "./../assets/marvel-logo.jpg";

export default function UniCharacter() {
    const [charData, setCharData] = useState('');
    const [show, setShow] = useState(false);
    const { kind, id } = useParams();

    useEffect(()=>window.scrollTo({top:0, behavior:"smooth"}), []);


    useEffect(() => {
        const getData = async () => {
            console.log('Api Called');
            const response = await fetch(`https://gateway.marvel.com:443/v1/public/${kind}/${id}${import.meta.env.VITE_QUERY}`);
            const resdata = await response.json();
            setCharData(resdata.data.results[0]);
            setShow(true);
            console.log(resdata)
            console.log(charData);
        }
        getData();
    }, [kind, id]);

    return (
        <div className="px-6">
            {!show && <h1>LOADING</h1>}
            {show &&
                <div className="">
                    <h1 className="text-5xl font-extrabold my-8 tracking-widest">{kind.toUpperCase()}</h1>

                    <div className="mx-4 flex justify-between items-center gap-8">
                        <div>
                            <h3 className="text-slate-400 text-3xl">#{charData.id}</h3>
                            <h3 className="text-6xl tracking-wide font-bold my-2">{charData.name || charData.title}</h3>
                            {charData?.issueNumber && <h5 className="my-4 mx-2 mt-6 text-2xl text-slate-400">Issue No. = {charData?.issueNumber}</h5>}
                            {charData?.startYear && <h5 className="my-4 mt-6 mx-2 text-2xl text-slate-400">{
                                charData?.startYear + ' - ' + charData?.endYear
                            }</h5>}
                            {(kind === 'comics') ?
                                <h3 className="text-2xl text-slate-600 mx-2" 
                                >{(charData?.prices[0]?.type) + " ="}  
                                    <span className="text-slate-800 text-3xl">
                                        {"  $ " + charData?.prices[0]?.price}
                                    </span>
                                </h3> : '' }
                        </div>

                        {charData.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ?
                            <img src={marvelLogo} alt="img" className="h-96 w-96 rounded-lg shadow-2xl" /> :
                            <img src={charData.thumbnail.path + "." + charData.thumbnail.extension} alt="img" className="h-96 w-96 rounded-lg shadow-2xl" />}
                    </div>


                    <p>{(typeof (charData.description) === 'string') ?
                        charData.description : null}</p>

                    {charData?.variants?.length > 0 &&
                        <ResourceContainer
                            kind="comics"
                            data={charData?.variants.map} />}

                    {charData?.characters?.available > 0 &&
                        <ResourceContainer
                            kind="characters"
                            data={charData?.characters.items} />}

                    {charData?.creators?.available > 0 &&
                        <ResourceContainer
                            kind="creators"
                            data={charData.creators.items}
                        />}

                    {charData?.comics?.available > 0 &&
                        <ResourceContainer kind="comics" data={charData?.comics.items} />}


                    {(charData?.series?.available > 0 || (kind === 'comics' && charData?.series != null)) &&
                        <ResourceContainer kind="series"
                            data={kind === "comics" ? charData?.series?.resourceURI : charData?.series.items} />
                    }

                    {charData?.events?.available > 0 &&
                        <ResourceContainer kind="events" data={charData?.events.items} />
                    }
                </div>
            }
        </div>
    );
}

const ResourceContainer = (props) => {

    return (
        <div className="bg-slate-100 h-full my-10 py-4 rounded-xl min-w-[95vw]">
            <h1 className="mx-8 mt-2 font-bold text-3xl tracking-wider">{props.kind.toUpperCase()}</h1>
            <div className="  p-3 grid grid-flow-col w-max overflow-x-scroll overflow-y-visible" >
                {typeof (props.data) == "string" &&
                    <Resource
                        resourceURI={props.data}
                        kind={props.kind}
                    />
                }
                {
                    typeof (props.data) == 'object' &&
                    props?.data?.length > 0 && props?.data?.map(ele =>
                        // eslint-disable-next-line react/jsx-key
                        <Resource
                            resourceURI={ele.resourceURI}
                            kind={props.kind}
                        />)
                }
            </div>
        </div>
    );
}