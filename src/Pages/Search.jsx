/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";


export default function Search(){

    const [choice, setChoice] = useState('characters');
    const [inputVal, setInputVal] = useState("");
    const [searchRes, setSearchVal] = useState([]);
    const [show, setShow] = useState(false);
    function handleInputChange(e){
        let val = e.target.value;
        // console.log(val);
        setShow(false);
        const arr = val.split(" ");
        setInputVal(arr.join('%20'));
    }

    useEffect(()=>{
        const getData = setTimeout(async ()=>{
            console.log("Search called")

            const res = await fetch(`https://gateway.marvel.com:443/v1/public/${choice}${import.meta.env.VITE_QUERY}&${(choice === 'characters' || choice === 'creators' || choice === 'events')?"nameStartsWith":"titleStartsWith"}=${inputVal}`);
            
            const data = await res.json();
            setSearchVal(data.data.results);
            console.log(data);
            setShow(true);
        },2000);

        return ()=>clearTimeout(getData);
    },[choice, inputVal])


    return (
        <div>
            <select name="" id="" onChange={(e)=>{setChoice(e.target.value); setShow(false)}}>
                <option value="characters">Characters</option>
                <option value="comics">Comics</option>
                <option value="series">Series</option>
                <option value="events">Events</option>
                <option value="creators">Creators</option>
            </select>

            <input type="text" placeholder="Search Here" onChange={handleInputChange} />

            <div>
                searchVal = {inputVal}
                <hr />
                choice = {choice}
            </div>

            <div>
                {searchRes.map(m => show && <h3 key={m.id}>{m.id + "  //  "  + (m.name || m.title)}</h3> )}
            </div>
        </div>
    );
}