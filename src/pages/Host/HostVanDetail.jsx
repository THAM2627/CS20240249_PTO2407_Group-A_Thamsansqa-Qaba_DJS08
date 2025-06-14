import React from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import { getHostVans } from "../../api";

function HostVanDetail() {
    const {loading, setLoading} = React.useState(null)
    const { id } = useParams()
    const [error, setError] = React.useState(null)
    const [currentVan, setCurrentVan] = React.useState(null)

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    React.useEffect(() => {
     async function loadVans() {
         setLoading(true)
         try{
            const data = await getHostVans(id)
            setCurrentVan(data)
         } catch (err) {
            setError(err)
         } finally {
            setLoading(false)
         }
     }
     loadVans()
    }, [id])

    if (!currentVan) {
        return (
            <h1>Loading...</h1>
        )   
    }

    return (
        <section>
        <Link
            to=".."
            relative="path"
            className="back-button"
        >&larr; <span>Back to all vans</span></Link>

        <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
        <img src={currentVan.imageUrl} />
        <div className="host-van-detail-info-text">
        <i
        className={`van-type van-type-${currentVan.type}`}>
        {currentVan.type}
        </i>
        <h3>{currentVan.name}</h3>
        <h4>${currentVan.price}/day</h4>
        </div>
            </div>
        
            <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{ currentVan }} />
            </div>
        </section>
    )
}
export default HostVanDetail