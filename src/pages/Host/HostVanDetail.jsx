import React from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";

function HostVanDetail() {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
        .then(res => res.json())
        .then(data => setCurrentVan(data.van))
    }, [])

    if (!currentVan) {
        return (
            <h1>Loading...</h1>
        )   
    }

    return (
        <h1>HostVanDetail</h1>
    )
}

export default HostVanDetail