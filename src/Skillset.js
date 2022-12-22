import React from "react"
import skillset from "./data/skillset.js"

export default function Skillset(){
    const skill = skillset.map(skill=>{
        return(
            <div className="skillset-card">
                <img src={skill.image}/>
                <h3>{skill.name}</h3>
                <p>{skill.detail}</p>
            </div>
        );
    })
    return(
        <div className="skillset-container" id="skillset">
            <div className="skillset-container-cover">
                <h1>Skillsets</h1>
                <p>A Sneak peek into my skillsets. These fields really interests me a lot. I might not be very professional in these but I have always believed that if you have that resolutness in you, there's nothing that can stop you.<br/>You are your very own Porsche...<br/>
                <span>"The only thing standing between you and outrageous success is continuous progress."</span></p> 
            </div>
            <div className="skillset-container-cards">
                {skill}
            </div>
        </div>
    );
}