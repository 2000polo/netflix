import React from 'react';
import "./GetEmail.css";
import {useHistory} from 'react-router-dom';

function GetEmail() {

    const history = useHistory();

    const home = ()=>{
        history.push('/home');
    }

    return (
        <div className = "e-mail-form">
            <div >
            <p className="head-para">Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
            <input type="e-mail" className="e-mail" placeholder = "Enter your Email"/>
            <button onClick={home} className= "getstart" >Get Started</button>
        </div>
    )
}

export default GetEmail;
