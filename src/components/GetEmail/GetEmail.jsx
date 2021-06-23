import React from 'react';
import "./GetEmail.css";

function GetEmail() {
    return (
        <div className = "e-mail-form">
            <div >
            <p className="head-para">Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
            <input type="e-mail" className="e-mail" placeholder = "Enter your Email"/>
            <button className= "getstart" >Get Started</button>
        </div>
    )
}

export default GetEmail;
