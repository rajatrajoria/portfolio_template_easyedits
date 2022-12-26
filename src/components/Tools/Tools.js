import React from "react";
import tools from "../../data/tools";
import './tools.css';

export default function Tools(){
    const toolselement = tools.map(item=>{
        return(
                <div className="tools-container-cards-card">
                    <img src={item.image}/>
                </div>
        );
    })
    return(
        <div className="tools-container">
            <div className="tools-container-cover">
                <h4>TECHNICAL SKILLS</h4>
                <h1>Some tools with which I have worked...</h1>
            </div>
            <div className="tools-container-cards">
                {toolselement}
            </div>
        </div>
    );
}