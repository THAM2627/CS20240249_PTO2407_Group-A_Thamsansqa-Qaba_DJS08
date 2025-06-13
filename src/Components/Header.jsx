import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        color: "#161616",
        textDecoration: "underline"
    }
    return (
        <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
        <Link to="/host">Host</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
        </nav>
        </header>
       
    );
}