import React from "react";
import { Link } from "react-router-dom";

function HostVans() {
    
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])

    
    return (
        <h1>HostVans</h1>
    )
}

export default HostVans