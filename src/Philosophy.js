import React from "react";

export default function Philosophy(props){
    return(
        <div className="philosophy-container" id="philosophy">
            <div className="philosophy-container-text">
                <h1> Philosophy & Values </h1>
                <p>{props.text}<br/><br/><span>Friends🤝. Family👨‍👩‍👧‍👦. Love❤️. $$$💰</span></p>
            </div>
            <img src={props.img}/>
        </div>
    );
}