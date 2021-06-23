import React from "react";
import "./Landing.css";
import GetEmail from "../../components/GetEmail/GetEmail"
import Accordion from '../../components/Accordion/Accordion';
import Footer from '../../components/Footer/Footer';
import { useHistory } from "react-router-dom";

function Landing (){

    const history = useHistory();

    const signin = () =>{
        history.push('./signin');
    }

    const home = () =>{
        history.push('/home')
    }
    return (
        <div className="Landing-main-wrapper">
            <div className="nav">
                <div>
                    <nav>
                        <div className="L-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/3000px-Netflix_2015_logo.svg.png" alt="" />
                        </div>

                        <div className="land-nav-btn-wrapper">
                            <div className="language">
                                Language
                            </div>
                            <button onClick = {signin} className="signin">
                                Sign in
                            </button>
                            
                        </div>
                    </nav>
                </div>
            </div>
            
            <div className="hero-section">
                <div className="text">
                    <h1 className="main-head">Unlimited movies, TV shows and more.</h1>
                    <h5 className="sub-head">Watch anywhere, cancel anywere</h5>
                </div>
               
                <div onClick={home} className="getstart-field">
                    <GetEmail />
                </div>
                <div className="land-overlay">

                </div>
            </div>

            <div className="section1">
                <div className="sec1-text">
                    <h1>Enjoy on your TV.</h1>
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className="img1">
                    
                </div>
            </div>

            <div className="section2">
                
                <div className="mobile">

                </div>
                
                <div className="sec2-text">
                    <h1>Download your shows to watch offline.</h1>
                    <p>Save your favourites easily and always have something to watch.</p>
                </div>
            </div>

            <div className="section3">
                <div className="sec3-text">
                    <h1>Watch everywhere.</h1>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className="mac-pc">
                    
                </div>
            </div>

            <div className="section4">
                <div className="children">
                    
                </div>
                <div className="sec4-text">
                    <h1>Create profile for children.</h1>
                    <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div>
            </div>

            <div className="section5">
                <h1 className="accordion-title">
                    Frequrntly Asked Questions
                </h1>
                <Accordion />
                <Accordion />
                <Accordion />
                <Accordion />
                <Accordion />
                <div onClick={home} className="l-email">
                    <GetEmail />
                </div>
                
            </div>

            <footer>
                <Footer />
            </footer>

            


        </div>
    );
}

export default Landing;