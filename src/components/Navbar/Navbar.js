import React from "react";
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar";

export default function Navbar(){
    return(
        <nav className="navbar">
            <DesktopNavbar/>
            <MobileNavbar/>
        </nav>
    );
}