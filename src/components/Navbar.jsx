import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
            <i class="ri-map-pin-fill"></i>
                <h1 className="logo--name">WeBarelyWork</h1>
            </div>
            <a href="#" className="nav--menu"><i class="ri-menu-line"></i></a>
        </nav>
    )
}