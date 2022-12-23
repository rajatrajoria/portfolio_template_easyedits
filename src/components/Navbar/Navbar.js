import React from "react";
import './navbar.css';

export default function Navbar(props){
    return(
        <div className="navbar-container" id="navbar">
            <div className="navbar-container-name">
                <h4>{props.myname}</h4>
            </div>
            <div className="navbar-container-contents">
                <div className="navbar-container-contents-holder">
                    <ul>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#skillset">Skills</a></li>
                        <li><a href="#projects" >Projects</a></li>
                        <li><a href="" className="ncch-contacts">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}