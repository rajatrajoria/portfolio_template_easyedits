import React from "react";
import './philosophy.css'
import philosophy from "../../data/philosophy"
export default function Philosophy(){
    return(
        <div className="philosophy-container" id="philosophy">
            <div className="philosophy-container-text">
                <h1> Philosophy & Values </h1>
                <p>{philosophy.text}<br/><br/><span>Friends🤝. Family👨‍👩‍👧‍👦. Love❤️. $$$💰</span></p>
            </div>
            <img src={philosophy.image}/>
        </div>
    );
}