import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const handleFeedback = () => {
        navigate("/feedback")
    }
    
    const handleLogin = () => {
    navigate("/login")
    }

  const handleRegister = () => {
    navigate("/register")
  }
    return (
        <div>
            <div className="topnav">
            <div className="log-wrapper">
                <button onClick={() => handleLogin()} className="log-btn">Login</button>
                
                <button onClick={() => handleRegister()} className="log-btn">Register</button>
            </div>

                <button onClick={() => handleFeedback()} className="feedbtn">Feedback</button>
            </div>
            <div className="header">
            
                <div className="name-wrapper">
                <h1>NewsIndia</h1>
                </div>
                <input className="search" type="text" placeholder="    Search" />

            </div>
            
        </div>
    )
}