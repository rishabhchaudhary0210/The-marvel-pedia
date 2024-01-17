// import {priURL} from './env'
import { useState } from "react";
import Card from "./card";
// import SingleChar from './singleChar';


export default function Fetch(){

    const [apiData, setApiData] = useState([]);

    const getData = async ()=>{
        // const response = await fetch("https://gateway.marvel.com:443/v1/public/characters?apikey="+import.meta.env.priURL);
        const response = await fetch("https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=ir&apikey=a8be9384bfc4ef6b64393411e938dd46")
        const data = await response.json();
        setApiData(data.data.results);
        // console.log(data.data.results);
        // console.dir(apiData);
    }

   

    return (
        <div>
            <button >Click For Single Char </button>
            <button onClick={getData}>Click Me</button>
            hello



            <div>
                {
                    apiData.map( element=>{
                        // console.log(element)
                        // eslint-disable-next-line react/jsx-key
                        return <Card
                            head={element.name}
                            id={element.id}
                            url={element.thumbnail.path+'.'+element.thumbnail.extension}
                        />
                    })
                }
            </div>

        </div>
    );

}