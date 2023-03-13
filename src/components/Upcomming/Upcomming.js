import React, { useEffect, useState } from 'react';
import Carts from '../Cart/Carts';
import './Upcomming.css';

const Upcomming = ({movie}) => {
    const [upcomming, setupcomming] = useState([]);
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b22286e95cee300300efc5199fdf32be&language=en-US')
        .then(res => res.json())
        .then(data => setupcomming(data.results));
    },[])
    return (
        <>
        <h3 className="what__popolar">What's Upcomming</h3>
        <div className="popular__list">
            <div className="carts__list">
                {
                    upcomming.map(movie => <Carts movie={movie}/>)
                }
            </div>
        </div>
        </>
    );
};

export default Upcomming;