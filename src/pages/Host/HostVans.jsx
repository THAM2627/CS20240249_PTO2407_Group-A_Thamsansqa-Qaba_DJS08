import React from "react";
import { Link } from "react-router-dom";

function HostVans() {

    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])

    const hostVansEls = vans.map(van=> (  
        <Link 
        to={`/host/vans/${van.id}`} 
        key={van.id}
        className="host-van-link-wrapper">
        
        <div className="host-van-single" key={van.id}>
            <img src={van.imageUrl} alt={`Photo of ${van.name}`}/>
            
        <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
            </div>
        </div>
        </Link>
    ))
    
    return (
        <h1>HostVans</h1>
    )
}

export default HostVans