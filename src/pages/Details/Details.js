import React, { useEffect, useState } from 'react';
import { IoIosStar } from 'react-icons/io';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const [details, setDetails] = useState()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b22286e95cee300300efc5199fdf32be&language=en-US`)
        .then(res => res.json())
        .then(data => setDetails(data));
    }, [id])
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/')
    }
    return (
        <div className='movie'>
            <div className="container">
            <div className="movie__intro">
                <img alt='' className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${details ? details.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
            <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img alt='' className="movie__poster" src={`https://image.tmdb.org/t/p/original${details ? details.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__DetailRight">
                    <h2>{details ? details.original_title : "not title"}</h2>
                    <p>{details ? details.tagline : "Nai"}</p>
                    <span>{details ? details.vote_average : "nai"}</span>
                    <span>{ details ? "(" + details.vote_count + ")" : "nai" }</span>
                    <span className='icon'><IoIosStar /></span>
                    <p>{details ? details.release_date : "nai"}</p>
                    <div className="movie__detailRightBottom">
                    <div className="synopsisText">Synopsis</div>
                    <p>{details? details.overview : "nai"}</p>
                </div>
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                <div className="link">
                    <button onClick={() => handleNavigate()}>Home page</button>
                </div>
                {
                    details && details.imdb_id && <Link href={"https://www.imdb.com/"} target="_blank" style={{textDecoration: "none"}}>
                    <span className="movie__imdbButton movie__Button">IMDb</span></Link>
                }
            </div>
            </div>
        </div>
    );
};

export default Details;