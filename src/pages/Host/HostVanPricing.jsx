import React  from "react";
import { useOutletContext, userOutletContext } from "react-router-dom";

function HostVanPricing() {
    const{currentVan} = useOutletContext()

    return (
        <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
    )
}