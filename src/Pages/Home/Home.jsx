import React from 'react';
import Banner from "../../components/Banner/Banner"
import Navbar from "../../components/Navbar/Navbar";
import Rowpost from "../../components/Rowposters/Rowpost";
import {Netflix, Horror, Fantasy, Mystery, Comedy} from "../../urls";
import Footer from "../../components/Footer/Footer";

function Home(){
    return (
        <div className="main-home-wrapper">
            <Navbar />
            <Banner />
            <Rowpost url = {Netflix} title = "Netflix Originals" />
            <Rowpost url = {Horror} title = "Horror" isSmall />
            <Rowpost url = {Fantasy} title = "Fantasy" isSmall />
            <Rowpost url = {Mystery} title = "Mystery" isSmall />
            <Rowpost url = {Comedy} title = "Comedy" isSmall />
            <Footer />
        </div>
    )
}

export default Home;