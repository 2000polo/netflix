import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import './View.css';

function View() {
    return (
        <div className = "main-view-wrapper">
            <Navbar />
            <Banner />
        </div>
    )
}

export default View
