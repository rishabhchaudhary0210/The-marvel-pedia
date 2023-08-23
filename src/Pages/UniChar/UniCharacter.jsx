/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Resource from "../../Components/FetchCard/Resource";

export default function UniCharacter(props) {
    const [charData, setCharData] = useState('');
    const [show, setShow] = useState(false);
    // // eslint-disable-next-line no-unused-vars
    // const [offset, setOffset] = useState(0);
    useEffect(() => {
        const getData = async () => {
            console.log('Api Called');
            const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${props.id}${import.meta.env.VITE_QUERY}`);
            const resdata = await response.json();
            setCharData(resdata.data.results[0]);
            setShow(true);
            console.log(charData);
        }
        getData();
    }, []);

    return (
        <>
            {show &&
                <div>
                    <h3>{charData.id}</h3>
                    <h3>{charData.name}</h3>
                    <img src={charData.thumbnail.path + "." + charData.thumbnail.extension} alt="img" style={{ height: "150px", width: "150px" }} />
                    <p>{charData.description}</p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>COMICS</h2>
                        {
                            // eslint-disable-next-line react/jsx-key
                            charData.comics.items.map(ele => <Resource resourceURI={ele.resourceURI} />)
                        }
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>SERIES</h2>
                        {
                            // eslint-disable-next-line react/jsx-key
                            charData.series.items.map(ele => <Resource resourceURI={ele.resourceURI} />)
                        }
                    </div>
                    
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>EVENTS</h2>
                        {
                            // eslint-disable-next-line react/jsx-key
                            charData.events.items.map(ele => <Resource resourceURI={ele.resourceURI} />)
                        }
                    </div>

                </div>
            }
        </>
    );
}
