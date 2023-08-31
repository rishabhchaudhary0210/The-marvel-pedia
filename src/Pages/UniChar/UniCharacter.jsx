/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Resource from "../../Components/FetchCard/Resource";
import { useParams } from "react-router-dom";

export default function UniCharacter() {
    const [charData, setCharData] = useState('');
    const [show, setShow] = useState(false);
    const {kind, id} = useParams();
    useEffect(() => {
        const getData = async () => {
            console.log('Api Called');
            const response = await fetch(`https://gateway.marvel.com:443/v1/public/${kind}/${id}${import.meta.env.VITE_QUERY}`);
            const resdata = await response.json();
            setCharData(resdata.data.results[0]);
            setShow(true);
            console.log(charData);
        }
        getData();
    }, [kind, id]);

    return (
        <>
        {!show && <h1>LOADING</h1> }
            {show &&
                <div>
                    <h1>{kind}</h1>

                    <h3>{charData.id}</h3>
                    
                    <h3>{charData.name || charData.title}</h3>
                    
                    <h5>{charData?.issueNumber}</h5>
                    
                    <img src={charData.thumbnail.path + "." + charData.thumbnail.extension} alt="img" style={{ height: "150px", width: "150px" }} />
                    
                    <h5>{
                        charData?.startYear+' - '+ charData?.endYear
                    }</h5>  
                    
                    {(kind === 'comics') ?
                        <h3>{charData?.prices[0]?.type + "  $ " +charData?.prices[0]?.price}</h3>:''}
                    
                    <p>{(typeof(charData.description) === 'string')?
                        charData.description.substring(0, 70):"DESCRIPTION"}</p>

                    {charData?.variants?.length>0 && 
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>VARIANTS</h2>
                        {
                            charData?.variants.map(ele => 
                            // eslint-disable-next-line react/jsx-key
                            <Resource  
                                resourceURI={ele.resourceURI} 
                                kind="comics"
                            />)
                        }
                    </div>}

                    {charData?.characters?.available > 0 && <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>CHARAC</h2>
                        {
                            charData?.characters.items.map(ele => 
                                // eslint-disable-next-line react/jsx-key
                            <Resource 
                                resourceURI={ele.resourceURI}
                                kind="characters"
                            />)
                        }
                    </div>}

                    {charData?.creators?.available > 0 && <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>CREATORS</h2>
                        {
                            charData.creators.items.map(ele => 
                                // eslint-disable-next-line react/jsx-key
                            <Resource 
                                resourceURI={ele.resourceURI}
                                kind="creators"
                            />)
                        }
                    </div>}

                    {charData?.comics?.available > 0 && <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>COMICS</h2>
                        {
                            charData?.comics.items.map(ele => 
                                // eslint-disable-next-line react/jsx-key
                            <Resource 
                                resourceURI={ele.resourceURI}
                                kind="comics"
                            />)
                        }
                    </div>}


                    {(charData?.series?.available > 0 || (kind === 'comics' && charData?.series != null))  && <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>SERIES</h2>
                        {
                            (kind === 'comics') ?
                                <Resource kind="series" resourceURI={charData?.series?.resourceURI} />
                            :
                            charData?.series.items.map(ele => 
                                // eslint-disable-next-line react/jsx-key
                                    <Resource 
                                        resourceURI={ele.resourceURI}
                                        kind="series"
                                     />)
                        }
                    </div>}
                    
                    {charData?.events?.available > 0 && <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>EVENTS</h2>
                        {
                            charData?.events.items.map(ele => 
                                // eslint-disable-next-line react/jsx-key
                            <Resource 
                                resourceURI={ele.resourceURI}
                                kind="events"
                            />)
                        }
                    </div>}

                </div>
            }
        </>
    );
}
