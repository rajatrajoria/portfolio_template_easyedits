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
import Experiences from "./components/Experiences/Experiences"
import Snowfall from 'react-snowfall'

export default function App(){
    return(
        <div>
            <Snowfall snowflakeCount= {70} color="white"
                style={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                }}
            />
            <Navbar/>
            <Intro/>
            <Education/>
            <Philosophy/>
            <Skillset/>
            <Tools/> 
            <Experiences/>   
            <Projects/>
            <Hobbies/>
            <Footer/>
        </div>
    );
}

