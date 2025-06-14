import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { getVans } from "../../api";

export default function VanDetail() {
    const params = useParams();
    const location = useLocation();
    const [van, setVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    
    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans(id)
                setVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [id])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error){
        return <h1>There was an error:{error.message}</h1>
    }
    const search = location.search?.search||""
    const type = location.state?.type||""

    return (
        <div className="van-detail-container">

        <Link
            to={`..${search}`}
            relative="path"
            className="back-button"
        >&larr; <span>Back to all vans</span></Link>

        {van && (
            <div className="van-detail">
            <img src={van.imageUrl} />
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name} <span>${van.price}<span>/day</span></span></h2>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
            </div>
        )}
        </div>
    )
}