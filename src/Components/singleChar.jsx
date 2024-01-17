/* eslint-disable react/prop-types */
import {  useState } from "react";
import Resource from "./Resource";

export default function SingleChar(props) {

    const [charData, setCharData] = useState();
    const [show, setShow] = useState(false);

    const getCharData = async () => {
        const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${props.id}?apikey=a8be9384bfc4ef6b64393411e938dd46`)
        
        const data = await response.json();

        setCharData(data.data.results[0]);
        setShow(true);
        console.log(charData);
    }

    return (
        <div>
            <button onClick={getCharData}>Click For data</button>
            {/* {console.dir(charData)}; */}

            {show && <div>

                <div>
                    <img src={charData.thumbnail.path + '.' + charData.thumbnail.extension} alt="" style={{ height: '100px', width: '100px' }} />
                </div>

                <div>
                    <h1>{charData.name}</h1>
                    <h3>{charData.id}</h3>
                    <p>
                        {charData.description}
                    </p>
                </div>

                <div>
                    <h1>Comics</h1>
                    {
                        // eslint-disable-next-line react/jsx-key
                        charData.comics.items.map(ele => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <Resource resourceURI={ele.resourceURI} />
                            )
                        })
                    }
                </div>

                <div>
                    <h1>Series</h1>
                    {
                        charData.series.items.map(ele => {
                            return (
                                 // eslint-disable-next-line react/jsx-key
                                 <Resource resourceURI={ele.resourceURI} />
                                // <div key={charData.id + 10}>
                                //     <h1>{ele.name}</h1>
                                // </div>
                            )
                        })
                    }
                </div>

                <div>
                    <h1>Events</h1>
                    {
                        charData.events.items.map(ele => {
                            return (
                                 // eslint-disable-next-line react/jsx-key
                                 <Resource resourceURI={ele.resourceURI} />
                                // <div key={charData.id + 20}>
                                //     <h1>{ele.name}</h1>
                                // </div>
                            )
                        })
                    }
                </div>
                <div>
                    <h1>Stories</h1>
                    {
                        charData.stories.items.map(ele => {
                            return (
                                 // eslint-disable-next-line react/jsx-key
                                 <Resource resourceURI={ele.resourceURI} />
                                // <div key={charData.id + 20}>
                                //     <h1>{ele.name}</h1>
                                // </div>
                            )
                        })
                    }
                </div> 

            </div>
            }
        </div>
    );
}



