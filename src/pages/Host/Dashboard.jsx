import React from "react";
import { Link } from "react-router-dom";
import {getHostVans} from "../../api"
import { BsStarFill } from "react-icons/bs"


function Dashboard() {
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(); {
        setLoading(true)
        getHostVans()
        .then(data => {
            setVans(data)
        })
        .catch(err => {
            setError(err)
        })
        .finally(() => {
            setLoading(false)
        },[])
    

 function renderVanElements(vans) {
    const hostVansEls = vans.map(van=> (
        <div className="host-van-single" key={van.id}>
            <img src={van.imageUrl} alt={`Photo of ${van.name}`}/>
            <div className="host-van-info">
                <h3>{van.name}</h3>
                <p>${van.price}/day</p>
            </div>
            <Link to={`/host/vans/${van.id}`}>View Van </Link>
    ))
    return (
        <div className="host-vans-list">
            <section>
                {hostVansEls}
            </section>
        </div>
    )


if (error) { 
    return(<h1>There was an error:{error.message}</h1>)
}

return(
    <>
    <section className="host-dashboard-earnings">

        <div className="info">
            <h1>Welcome</h1>
            <p>Last 30 days</p>
            <h2>$2,260</h2>
        </div>

        <div className="reviews">
            <h2>Reviews</h2>
            <div className="star">
                <BsStarFill />
    </div>
    </section>
    </>
)

export default Dashboard