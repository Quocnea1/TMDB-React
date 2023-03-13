import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carts from '../Cart/Carts';
import './Movies.css'

const Movies = () => {
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [type])
    // console.log(movieList, type)
    const getData = (type) => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : 'popular'}?api_key=b22286e95cee300300efc5199fdf32be&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results));
    }

    return (
        <div className="movie__list">
            <div className="container">
                <div className="movieList_container">
                <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
                <div className="list__cards">
                    {
                        movieList.map(movie => (
                            <Carts movie={movie} />
                        ))
                    }
                </div>
                </div>
            </div>
        </div>
    )
};

export default Movies;