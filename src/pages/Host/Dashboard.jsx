import React from "react";


function Dashboard() {
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect() => {
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
        })
    }
    return (
        <div>
        <h1>Dashboard</h1>
˜
        </div>
    )
}

export default Dashboard