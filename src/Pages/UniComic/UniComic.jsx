/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Resource from "../../Components/FetchCard/Resource";

export default function UniComic(props) {
    const [comicData, setcomicData] = useState('');
    const [show, setShow] = useState(false);
    // // eslint-disable-next-line no-unused-vars
    useEffect(() => {
        const getData = async () => {
            console.log('Api Called');
            const response = await fetch(`https://gateway.marvel.com:443/v1/public/comics/${props.id}${import.meta.env.VITE_QUERY}`);
            const resdata = await response.json();
            setcomicData(resdata.data.results[0]);
            setShow(true);
            console.log(comicData);
        }
        getData();
    }, []);

    return (
        <>
            {show &&
                <div>
                    <h3>{comicData.id}</h3>
                    <h3>{comicData.title}</h3>
                    <h5>{comicData.issueNumber}</h5>
                    <img src={comicData.thumbnail.path + "." + comicData.thumbnail.extension} alt="img" style={{ height: "150px", width: "150px" }} />
                    <h3>{comicData.prices[0].type + comicData.prices[0].price}</h3>
                    <p>{comicData.description}</p>

                    <div>
                        <h2>SERIES</h2>
                        <Resource resourceURI={comicData.series.resourceURI} />
                    </div>
                    {comicData.variants.length>0 && 
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>VARIANTS</h2>
                        {
                            // eslint-disable-next-line react/jsx-key
                            comicData.variants.map(ele => <Resource resourceURI={ele.resourceURI} />)
                        }
                    </div>}

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>CHARACTERS</h2>
                        {
                            // eslint-disable-next-line react/jsx-key
                            comicData.characters.items.map(ele => <Resource resourceURI={ele.resourceURI} />)
                        }
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>EVENTS</h2>
                        {
                            // eslint-disable-next-line react/jsx-key
                            comicData.events.items.map(ele => <Resource resourceURI={ele.resourceURI} />)
                        }
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>CREATORS</h2>
                        {
                            // eslint-disable-next-line react/jsx-key
                            comicData.creators.items.map(ele => <Resource resourceURI={ele.resourceURI} />)
                        }
                    </div>

                </div>
            }
        </>
    );
}
