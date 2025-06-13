import React from "react";

export default function Vans() {
    React.useEffect(() => {
        fetch("/api/vans")
        .then (res => res.json())
        .then(data=>console.log(data))
    }, [])

    console.log(vans)
    
    return <div>
        Vans
        
        </div>;
}

