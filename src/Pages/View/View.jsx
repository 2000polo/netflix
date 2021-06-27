import React,{useContext, useEffect} from 'react';
import { imageBaseUrl } from '../../components/constants/constants';
import Navbar from '../../components/Navbar/Navbar';
// import Banner from '../../components/Banner/Banner';
import { viewContext } from '../../Context/Context';
import './View.css';

function View() {
    const {current} = useContext(viewContext);

    console.log(current)

    return (
        <div className = "main-view-wrapper">
            <Navbar />
            <div className="banner" style={{backgroundImage:`url(${current ? imageBaseUrl + current.backdrop_path : ""})`}}>
                <h1 className="title">{current? current.name || current.title : ""}</h1>
                <p className="meta-data"><span className="meta-ttl">Genere :</span> Survival <span className='data2' >|</span>Thriller</p>
                <p className='meta-data' > <span className='meta-ttl'>Rating :</span> <span className='rating' >{current ? current.vote_average : ""}</span><span className='rating2' >/10</span> <span className = 'fas fa-star' ></span> </p>
                <p className = 'Description'>{current ? current.overview : ""}</p>

                <div className="banner-button">

                <button className="btn ply-btn" style = {{z_index:10}}>
                    Play
                </button>
                
                <button className="btn mylist-btn">
                    My List
                </button>
                
                </div>
                <div className="overlay">

                </div>
                <div className="overlay1"></div>
            </div>
        </div>
    )
}

export default View
