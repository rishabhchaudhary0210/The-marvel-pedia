/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Resource from "../../Components/FetchCard/Resource";

export default function UniSeries(props) {
    const [seriesData, setseriesData] = useState('');
    const [show, setShow] = useState(false);
    // // eslint-disable-next-line no-unused-vars
    // const [offset, setOffset] = useState(0);
    useEffect(() => {
        const getData = async () => {
            console.log('Api Called');
            const response = await fetch(`https://gateway.marvel.com:443/v1/public/series/${props.id}${import.meta.env.VITE_QUERY}`);
            const resdata = await response.json();
            setseriesData(resdata.data.results[0]);
            setShow(true);
            console.log(seriesData);
        }
        getData();
    }, []);

    return (
        <>
            {show &&
                <div>
                    <h3>{seriesData.id}</h3>
                    <h3>{seriesData.title}</h3>
                    <img src={seriesData.thumbnail.path + "." + seriesData.thumbnail.extension} alt="img" style={{ height: "150px", width: "150px" }} />
                    <h5>{seriesData.startYear+' - '+seriesData.endYear}</h5>
                    <p>{seriesData.description}</p>

                    {seriesData.characters.available > 0 && <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>COMICS</h2>
                        {
                            // eslint-disable-next-line react/jsx-key
                            seriesData.characters.items.map(ele => <Resource resourceURI={ele.resourceURI} />)
                        }
                    </div>}
                    {seriesData.comics.available > 0 && <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>COMICS</h2>
                        {
                            // eslint-disable-next-line react/jsx-key
                            seriesData.comics.items.map(ele => <Resource resourceURI={ele.resourceURI} />)
                        }
                    </div>}

                    {seriesData.creators.available > 0 && <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>SERIES</h2>
                        {
                            // eslint-disable-next-line react/jsx-key
                            seriesData.creators.items.map(ele => <Resource resourceURI={ele.resourceURI} />)
                        }
                    </div>}
                    
                    {seriesData.events.available > 0 && <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>EVENTS</h2>
                        {
                            // eslint-disable-next-line react/jsx-key
                            seriesData.events.items.map(ele => <Resource resourceURI={ele.resourceURI} />)
                        }
                    </div>}

                </div>
            }
        </>
    );
}
