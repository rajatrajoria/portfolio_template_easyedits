import React from "react"
import './projects.css'
import projects from "../../data/projects"

export default function Projects(){
    const projectElement = projects.map(element=>{
        return(
            <div className="project-card">
                <img src={element.image}/>
                <h3>{element.name}</h3>
                <h5>{element.detail}</h5>
            </div>
        );
    });
    return(
        <div className="projects-container" id="projects">
            <div className="projects-container-cover">
                <h4> PROJECTS </h4>
                <h1> Some of my projects...</h1>
            </div>
            <div className="projects-container-cards">
                {projectElement}
            </div>
        </div>
    );
}