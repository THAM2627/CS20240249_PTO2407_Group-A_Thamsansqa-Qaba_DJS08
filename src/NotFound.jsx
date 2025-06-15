import React from "react"
import {Link} from "react-router-dom"

function NotFound() {
    return (
        <div className="not-found-container">
        <h1>Page Not Found, Sorry</h1>
        <Link to = "/" className="link-button">Return Home</Link>
        </div>
    )
}

export default NotFound