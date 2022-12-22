import React from "react"
import Navbar from "./Navbar"
import Intro from "./Intro"
import Education from "./Education"
import Philosophy from "./Philosophy"
import Skillset from "./Skillset"
import Projects from "./Projects"

export default function App(){
    return(
        <div>
            <Navbar myname="Rajat R."/>
            <Intro myname= "Rajat R." myimg= "https://wallpaperaccess.com/full/708935.jpg"/>
            <Education/>
            <Philosophy text="Everyone, I believe, want the same thing: a connect with mankind, metaphysical serenity, and cosmic experience. I strive to comprehend these concepts via my principles of sincerity, originality, and generosity." img="https://e0.pxfuel.com/wallpapers/78/907/desktop-wallpaper-autumn-forest-rivers-docks-serene-scenery-widescreen-high-definition-fullscreen.jpg"/>
            <Skillset/>
            <Projects/>
        </div>
    );
}

