import React from "react";

export default function Intro(props){
    return(
        <div className="intro-container">
            <img src={props.myimg}/>
            <div className="intro-container-about">
                <p>
                    I'm <span>Rajat</span><br/>
                    <span>Rajoria</span>.<br/>
                    A Software Developer<br/>
                    Engineer<br/>
                    based in <span>India</span>.<br/>
                </p>
                <h4>
                    I'm an aspiring individual passionate about programming and computers. Picking on different challenges and is always ready to learn new things
                    A Self-motivated problem-solver and a collaborative individual.
                </h4>
            </div>
        </div>
    );
}