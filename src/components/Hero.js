import React from "react";
import youtubeLogo from "../img/youtube_logo.jpg"
import instagramLogo from "../img/instagram_logo.jpg"
import "./hero.css"

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="welcome">
                <div className="welcome__text">
                    <h2 className="welcome__text-main" >Welcome To Passing Miles</h2> 
                    <h3 className="welcome__text-sub type-writer--sub">Travel Vlogs</h3>
                </div>  
            </div>
            <div className="social">
                <ul className="hero__list">
                    <li className = "hero__item">
                        <a href="https://www.youtube.com/c/YashVlogsPSY" className="hero__link">
                            <img src={youtubeLogo} alt = "youtube logo" className="hero__logo hero__link__youtube-logo"></img>
                        </a>
                    </li>
                    <li className = "hero__item">
                        <a href="https://www.instagram.com/passing_miles_/?hl=en" className="hero__link">
                            <img  src = {instagramLogo} alt="Instagram logo" className="hero__logo hero__link__instagram-logo"></img>
                        </a>
                    </li>
                </ul>
            </div> 
        </section>
    )
}