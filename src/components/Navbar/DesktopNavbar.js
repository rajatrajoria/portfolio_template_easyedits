import React from "react";
import './desktopnavbar.css';


export default function DesktopNavbar(){
    return(
        <div className="desktopnavbar-container">
            <div className="desktopnavbar-container-name">
                <h4>Rajat R.</h4>
            </div>
            <div className="desktopnavbar-container-contents">
                <div className="desktopnavbar-container-contents-holder">
                    <ul>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#skillset">Skills</a></li>
                        <li><a href="#projects" >Projects</a></li>
                        <li><a href="" className="desktopncch-contacts">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}