/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Resource from "../../Components/FetchCard/Resource";

export default function UniCharacter(props) {
    const [charData, setCharData] = useState('');
    const [show, setShow] = useState(false);
    useEffect(() => {
        const getData = async () => {
            console.log('Api Called');
            const response = await fetch(`https://gateway.marvel.com:443/v1/public/${props.kind}/${props.id}${import.meta.env.VITE_QUERY}`);
            const resdata = await response.json();
            setCharData(resdata.data.results[0]);
            setShow(true);
            console.log(charData);
        }
        getData();
    }, []);

    return (
        <>
        {!show && <h1>LOADING</h1> }
            {show &&
                <div>
                    <h1>{props.kind}</h1>

                    <h3>{charData.id}</h3>
                    
                    <h3>{charData.name || charData.title}</h3>
                    
                    <h5>{charData?.issueNumber}</h5>
                    
                    <img src={charData.thumbnail.path + "." + charData.thumbnail.extension} alt="img" style={{ height: "150px", width: "150px" }} />
                    
                    <h5>{
                        charData?.startYear+' - '+ charData?.endYear
                    }</h5>  
                    
                    {(props.kind === 'comics')?
                    <h3>{charData?.prices[0]?.type + "  $ " +charData?.prices[0]?.price}</h3>:''}
                    
                    <p>{(typeof(charData.description) === 'string')?charData.description.substring(0, 70):"DESCRIPTION"}</p>

                    {charData?.variants?.length>0 && 
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>VARIANTS</h2>
                        {
                            // eslint-disable-next-line react/jsx-key
                            charData?.variants.map(ele => <Resource resourceURI={ele.resourceURI} />)
                        }
                    </div>}

                    {charData?.characters?.available > 0 && <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>CHARAC</h2>
                        {
                            // eslint-disable-next-line react/jsx-key
                            charData?.characters.items.map(ele => <Resource resourceURI={ele.resourceURI} />)
                        }
                    </div>}

                    {charData?.creators?.available > 0 && <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>CREAORS</h2>
                        {
                            // eslint-disable-next-line react/jsx-key
                            charData.creators.items.map(ele => <Resource resourceURI={ele.resourceURI} />)
                        }
                    </div>}

                    {charData?.comics?.available > 0 && <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>COMICS</h2>
                        {
                            // eslint-disable-next-line react/jsx-key
                            charData?.comics.items.map(ele => <Resource resourceURI={ele.resourceURI} />)
                        }
                    </div>}


                    {(charData?.series?.available > 0 || (props.kind === 'comics' && charData?.series != null))  && <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>SERIES</h2>
                        {
                            (props.kind === 'comics') ?
                            <Resource resourceURI={charData?.series?.resourceURI} />
                            :
                            // eslint-disable-next-line react/jsx-key
                            charData?.series.items.map(ele => <Resource resourceURI={ele.resourceURI} />)
                        }
                    </div>}
                    
                    {charData?.events?.available > 0 && <div style={{
                        display: 'grid',
                        gridTemplateColumns: '200px 200px 200px 200px 200px'
                    }}>
                        <h2>EVENTS</h2>
                        {
                            // eslint-disable-next-line react/jsx-key
                            charData?.events.items.map(ele => <Resource resourceURI={ele.resourceURI} />)
                        }
                    </div>}

                </div>
            }
        </>
    );
}
