import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <section className="about">
                    <small>
                        <h2>About</h2>

                        <p>This website provides the top news headlines of India</p>
                        <p>Rashmi G</p>
                        <p>rashmig221@<a href="www.gmail.com">gmail.com</a></p>
                        <div><small>© 2022 NewsIndia —<a href="https://github.com/rashmi2297/Newsindia">@Rashmi Gangadhar</a></small></div>
                        <div className="icons">
                    
                        <a href="http://www.facebook.com"><FontAwesomeIcon icons={faCoffee}></FontAwesomeIcon></a> 
                        <a href="http://www.twitter.com"><i className="fab fa-twitter-square"></i></a>
                        <a href="http://www.instagram.com"><i className="fab fa-instagram"></i></a>
                        <a href="http://www.linkedin.com"><i className="fab fa-linkedin"></i></a>


                        </div>
                        
                    </small>

                    
                </section>
            </div>
        </footer>
    )
}