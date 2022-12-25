import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/Intro/Intro"
import Education from "./components/Education/Education"
import Philosophy from "./components/Philosophy/Philosophy"
import Skillset from "./components/Skillset/Skillset"
import Projects from "./components/Projects/Projects"
import Hobbies from "./components/Hobbies/Hobbies"
import Tools from "./components/Tools/Tools"
import Footer from "./components/Footer/Footer"

export default function App(){
    return(
        <div>
            <Navbar/>
            <Intro/>
            <Education/>
            <Philosophy/>
            <Skillset/>
            <Tools/>    
            <Projects/>
            <Hobbies/>
            <Footer/>
        </div>
    );
}

