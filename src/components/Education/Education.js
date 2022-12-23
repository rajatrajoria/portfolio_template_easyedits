import React from "react";
import './education.css'
import educationData from "../../data/educationData";

export default function Education(){
    const educationElement = educationData.map(element=>{
        return(
            <div className="institution-card">
                <p className="institution-id">0{element.id}</p>
                <p className="institution-name" >{element.name}</p>
                <p className="institution-course">{element.course}</p>
                <p className="institution-year">{element.startDate} - {element.endDate} </p>
                <p className="institution-detail">{element.detail}</p>
            </div>
        );
    })
    return(
        <div className="education-container" id="education">
            <div className="education-container-cover">
                <h4> EDUCATION </h4>
                <h1> Schools, I've attended in the past.</h1>
            </div>
            <div className="education-container-cards">
                {educationElement}
            </div>
        </div>
    )
}