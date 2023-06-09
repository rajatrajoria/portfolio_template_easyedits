import React from "react"
import './projects.css'
import projects from "../../data/projects"

export default function Projects(){
    const projectElement = projects.map(element=>{
        return(
            <div className="project-card" onClick={()=>{window.open(element.link)}}>
                <img src={element.image}/>
                <h3><u>{element.name}</u></h3>
                <p>{element.detail}</p>
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