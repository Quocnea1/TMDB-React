import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './Home.css';
import { IoIosStar } from "react-icons/io";
import Movies from '../../components/Movies/Movies';
import Popular from '../../components/Popular/Popular';

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=b22286e95cee300300efc5199fdf32be&language=en-US')
            .then(res => res.json())
            .then(data => setPopularMovies(data.results));
    }, [])

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b22286e95cee300300efc5199fdf32be&language=en-US&query=${searchTerm}`)
            .then(res => res.json())
            .then(data => setSearchResults(data.results));
        console.log(event);
    }

    return (
        <>
            <div className="banner">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <div key={movie.id} style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img alt="Img Not Found" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__main">
                                    <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average : ""}
                                            <span className='icon'><IoIosStar /></span>
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                                <div>
                                    <div id="cover">
                                        <form onSubmit={handleSearchSubmit}>
                                            <div className="tb">
                                                <div className="td">
                                                    <input className="search" type="text" placeholder="Search" value={searchTerm} onChange={handleInputChange}></input>                                                      
                                                </div>
                                                <div className="td" id="s-cover">
                                                    <button type="submit">
                                                        <div id="s-circle"></div>
                                                        <span></span>
                                                    </button>
                                                </div>
                                            </div>
                                                {/* <div className="boxFilm">
                                                        <div>{movie.overview}</div>
                                                </div> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
                {searchTerm === "" ? <Popular popularMovies={popularMovies} /> : <Movies movies={searchResults} />}
            </div>
        </>
    );
};

export default Home;
