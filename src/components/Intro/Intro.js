import React from "react";
import introdata from "../../data/introdata";
import './intro.css'

export default function Intro(){
    return(
        <div className="intro-container" id="intro">
            <img src={introdata.image}/>
            <div className="intro-container-about">
                <p>
                    I'm <span>{introdata.fname}</span><br/>
                    <span>{introdata.lname}</span>.<br/>
                    A {introdata.designation}<br/>
                    {introdata.profession}<br/>
                    based in <span>{introdata.location}</span>.<br/>
                </p>
                <h4>
                    {introdata.about}
                </h4>
            </div>
        </div>
    );
}