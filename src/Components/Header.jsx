import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
    const activeStyles = {
        fontWeight: "bold",
        color: "#161616",
        textDecoration: "underline"
    }
    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }
    
    return (
        <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
            <NavLink 
                to="/host"
                style={({isActive}) => isActive ? activeStyles : null}
            >
                Host
            </NavLink>
            <NavLink 
                to="/about"
                style={({isActive}) => isActive ? activeStyles : null}
            >
                About
            </NavLink>
            <NavLink 
                to="/vans"
                style={({isActive}) => isActive ? activeStyles : null}
            >
                Vans
            </NavLink>
        </nav>
    </header>
    );
}

export default Header