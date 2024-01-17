/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Resource(props) {

    const [resData, setResData] = useState();

    useEffect(() => {
        const func = async () => {

            const res = await fetch(props.resourceURI + import.meta.env.VITE_QUERY);
            const apidata = await res.json();

            let obj = {
                id: apidata.data.results[0].id,
                name: apidata.data.results[0].title || apidata.data.results[0].name || apidata.data.results[0].fullName,
                img: apidata.data.results[0].thumbnail?.path + '.' + apidata.data.results[0].thumbnail?.extension,
                description: apidata.data.results[0]?.description
            }
            setResData(obj);
        }
        func();
    }, [])

    return (
        <div>
            {!resData && <h1>LOADING!!!</h1>}

            {resData &&
                <NavLink to={`/${props.kind}/${resData.id}`}>
                    <div>
                        <h4>#{resData.id}</h4>
                        <h4>{resData.name || resData.title || resData.fullName}</h4>
                        <img src={resData.img} alt="" style={{ height: '100px', width: '100px' }} />
                        <p>
                            {
                                (typeof (resData.description) === 'string') ?
                                    resData.description.substring(0, 70)
                                    :
                                    "DESCRIPTION"
                            }
                        </p>
                    </div>
                </NavLink>
            }

        </div>
    )
}