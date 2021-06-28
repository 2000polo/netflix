import React,{useContext} from 'react'
import './Rowpost.css'
import { useEffect,useState } from 'react'
import axios from '../axios'
import { apiKey, imageBaseUrl } from '../constants/constants'
import { viewContext } from '../../Context/Context';
import { useHistory } from 'react-router-dom'; 
import { Utube } from '../../Context/Youtube'


function Rowpost(props){

    const [poster, setPoster] = useState([]);
    const {setCurrent} = useContext(viewContext);
    const {setUtube} = useContext(Utube);
    // const [utube, setUtube] = setState('');

    const history = useHistory();

    const currentHandler = (obj) =>{
        setCurrent(obj);
        console.log(obj)
        history.push('/view');
        axios.get(`/movie/${obj.id}/videos?api_key=${apiKey}&language=en-US`).then(response=>{
            console.log(response.data.results[0].key);
            setUtube(response.data.results[0].key);
        })
    }

    useEffect(() => {
        axios.get(props.url).then((response)=>{
            setPoster(response.data.results);
        })
    }, [])
    return (

        <div className="rowpost">
            <h3 className = 'row-title'>{props.title}</h3>
            <div className="posters">
                {
                    poster.map((obj) => {
                        // console.log(obj)
                        return(
                        <div onClick={()=>currentHandler(obj) }>
                            <div className={props.isSmall ?"other-poster" : "poster"} style={{backgroundImage : `url(${imageBaseUrl+obj.backdrop_path})`}} ></div>
                            <h4 className = 'poster-title'>{obj.original_name|| obj.title}</h4>
                            <p className='Rating'>Rating : {obj.vote_average}</p>
                        </div>
                        )
                    })
                }
                
            </div>
        </div>

    )

}

export default Rowpost