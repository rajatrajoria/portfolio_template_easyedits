import React from "react";
import './footer.css';

export default function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-container-upper">
                <h2>Rajat R.</h2>
                <div className="footer-container-upper-icons">
                    <img src="https://img.icons8.com/fluency/2x/instagram-new.png"/>
                    <img src="https://img.icons8.com/fluency/2x/facebook-new.png"/>
                    <img src="https://img.icons8.com/color/2x/twitter.png"/>
                    <img src="https://img.icons8.com/color/2x/linkedin.png"/>
                    <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/512/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png"/>
                    <img src="https://img.icons8.com/color/2x/codechef.png"/>
                    <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/512/external-codeforces-programming-competitions-and-contests-programming-community-logo-color-tal-revivo.png"/> 
                </div>
            </div>
            <div className="footer-container-lower">
                <p>No copyright 2023</p>
                <h4>Made with ❤️ by Rajat R.</h4>
            </div>
            <h5>Top</h5>
        </div>
    );
}