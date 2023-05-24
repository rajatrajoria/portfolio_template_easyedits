import React from "react"
import './experiences.css'
import xp from "../../data/experiences"

export default function Experiences(){
    const xpElement = xp.map(element=>{
        return(
            <div className="xp-card">
                <img src={element.image}/>
                <h3><u>{element.name}</u></h3>
                <h5>{element.duration}</h5>
                <p>{element.detail}</p>
            </div>
        );
    });
    return(
        <div className="xp-container" id="xp">
            <div className="xp-container-cover">
                <h4> EXPERIENCES </h4>
                <h1> Work experiences...</h1>
            </div>
            <div className="xp-container-cards">
                {xpElement}
            </div>
        </div>
    );
}