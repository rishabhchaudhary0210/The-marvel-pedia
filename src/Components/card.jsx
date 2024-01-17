/* eslint-disable react/prop-types */

export default function Card(props){

    return (
        <div className="card">
            {/* {console.log('Card Rendered')}
            {console.log(props.head, props.id, props.url)} */}
            <h1>Character Card</h1>
            <h1>{props.head}</h1>
            <h3>{props.id}</h3>
            <div className="thumbnail">
                <img src={props.url} alt="" style={{height:"100px",width:"100px"}}/>
            </div>
            <a href={"/"+props.id}>Click for more Info</a>
        </div>
    );
}