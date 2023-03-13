import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="headerLeft">
                    <Link to="/"><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="Img Not Found" className="logo" /></Link>
                    <Link to="/movies/popular" style={{textDecoration: "none"}} className='headerLink'>Popular</Link>
                    <Link to="/movies/upcomming" style={{textDecoration: "none"}} className='headerLink'>Upcomming</Link>
                    <Link to="/movies/top_rated" style={{textDecoration: "none"}} className='headerLink'>Top Rated</Link>
                    <Link to="movies/tv_Shows" style={{textDecoration: "none"}} className='headerLink'>TV Shows</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;