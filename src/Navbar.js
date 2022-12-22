import React from "react";

export default function Navbar(props){
    return(
        <div className="navbar-container">
            <div className="navbar-container-name">
                <h4>{props.myname}</h4>
            </div>
            <div className="navbar-container-contents">
                <div className="navbar-container-contents-holder">
                    <ul>
                        <li><a href="">Experience</a></li>
                        <li><a href="">Work</a></li>
                        <li><a href="">Photography</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}