import React from "react";
import './mobilenavbar.css';

export default function MobileNavbar(){
    const [open, setopen] = React.useState(false);
    function handler(){
        setopen(item=>!item);
    }
    return(
        <div>
            <div className="mobilenavbar-container">
                <div className="mobilenavbar-upper-container">
                    <div className="mobilenavbar-container-name">
                        <h4>Rajat R.</h4>
                    </div>
                    <img onClick={handler} src="https://cdn.pixabay.com/photo/2021/10/09/12/45/hamburger-icon-6694072__480.png"/>
                </div>
                {open &&
                <div className="mobilenavbar-lower-container">
                    <ul>
                        <li><a onClick={handler} href="#education">Education</a></li>
                        <li><a onClick={handler} href="#philosophy">Values</a></li>
                        <li><a onClick={handler} href="#skillset">Skills</a></li>
                        <li><a onClick={handler} href="#projects" >Projects</a></li>
                        <li><a onClick={handler} href="" className="ncch-contacts">Contact</a></li>
                    </ul>
                </div>
                }
            </div>
        </div>
    );
}