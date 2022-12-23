import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/Intro/Intro"
import Education from "./components/Education/Education"
import Philosophy from "./components/Philosophy/Philosophy"
import Skillset from "./components/Skillset/Skillset"
import Projects from "./components/Projects/Projects"
import Hobbies from "./components/Hobbies/Hobbies"

export default function App(){
    return(
        <div>
            <Navbar myname="Rajat R."/>
            <Intro myname= "Rajat R." myimg= "https://wallpaperaccess.com/full/708935.jpg"/>
            <Education/>
            <Philosophy text="Everyone, I believe, want the same thing: a connect with mankind, metaphysical serenity, and cosmic experience. I strive to comprehend these concepts via my principles of sincerity, originality, and generosity." img="https://e0.pxfuel.com/wallpapers/78/907/desktop-wallpaper-autumn-forest-rivers-docks-serene-scenery-widescreen-high-definition-fullscreen.jpg"/>
            <Skillset/>
            <Projects/>
            <Hobbies/>
        </div>
    );
}

