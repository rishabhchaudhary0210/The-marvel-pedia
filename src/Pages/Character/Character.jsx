import { useState, useEffect } from "react";
// import.meta.env.query;

export default function Character() {
    const [charData, setCharData] = useState('');
    const [show, setShow] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const getData = async () => {
            console.log('Api Called');
            const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters${import.meta.env.VITE_QUERY}&offset=${offset*20}`);
            const resdata = await response.json();
            setCharData(resdata.data.results);
            setShow(true);
            console.log(charData);
        }
        getData();
    }, [offset]);

    return (
        <>
        <button onClick={()=>setOffset(offset+1)}>Pagination {offset} </button>
        
        {show &&
        <div 
            style={{
                display:'grid',
                gridTemplateColumns:'200px 200px 200px 200px 200px'
            }}
        >   
            {charData.map(ele => 
                <div key={ele.id}>
                    <h4>{ele.id}</h4>
                    <h3>{ele.name}</h3>
                    <img src={ele.thumbnail.path+"."+ele.thumbnail.extension} alt="img" style={{height:"150px", width:"150px"}}/>
                    <p>{ele.description}</p>
                </div>
            )}
        </div>}
        </>
    );
}
