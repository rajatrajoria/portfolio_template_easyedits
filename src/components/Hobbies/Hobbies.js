import React from "react";
import './hobbies.css'
import hobbies from "../../data/hobbies";

export default function Education(){
    let i=0;
    const hobbiesElement = hobbies.map(element=>{
        if(i%2==0) 
        {
            return(
                <div className="hobby-container">
                    <div className="hobby-container-text">
                        <h1>{element.name}</h1>
                        <p>{element.detail}</p>
                    </div>
                    <img src={element.image}/>
                </div>
            );
        }
        else{
            return(
                <div className="hobby-container" id="hobbies">
                    <img src={element.image}/>
                    <div className="hobby-container-text">
                        <h1>{element.name}</h1>
                        <p>{element.detail}</p>
                    </div>
                </div>
            );
        }
    });

    return(
        <div className="hobbies-container">
            <div className="hobbies-container-cover">
                <h4> HOBBIES </h4>
                <h1> Some of the activities which I like are...</h1>
            </div>
            <div className="hobbies-container-full">
                {hobbiesElement}
            </div>
        </div>
    );
}