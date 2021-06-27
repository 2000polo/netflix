import axios from '../axios'
import React,{useEffect, useState} from 'react'
import { apiKey, imageBaseUrl } from '../constants/constants'
import './Banner.css'

function Banner(){

    const [movie , setMovie ] = useState();

    let randmNum = Math.floor(Math.random()*20)

    useEffect(() => {
        axios.get(`/trending/all/day?api_key=${apiKey}`).then((response)=>{
            setMovie(response.data.results[randmNum]);
        })
    }, [])

    return (
        <div
        className="banner"
        style = {{backgroundImage : `url(${ movie ? imageBaseUrl + movie.backdrop_path : "" })`}}
        >
            <h1 className='title' >{movie ? movie.name || movie.title : "" }</h1>
            <p className='meta-data' ><span className='meta-ttl'>Genere :</span> Survival <span className='data2' >|</span> Thriller </p>
            <p className='meta-data' > <span className='meta-ttl'>Rating :</span> <span className='rating' >{movie ? movie.vote_average : "" }</span><span className='rating2' >/10</span> <span className = 'fas fa-star' ></span> </p>
            <p className = 'Description'>{movie ? movie.overview : "" }</p>

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
    )

}

export default Banner