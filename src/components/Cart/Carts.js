import React, { useEffect, useState } from 'react';
import { IoIosStar } from 'react-icons/io';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import './Carts.css'

const Carts = ({movie}) => {
    // console.log(movie)
    const [isLooding, setIsLooding] = useState(true);
    useEffect( () => {
        setTimeout(() => {
            setIsLooding(false)
        }, 1500)
    },[])
    return (
        <div className='carts__container'>
            {
            isLooding ? 
            <div className="carts">
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton height={300} duration={2} />
                </SkeletonTheme>
            </div>
            :
            <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
                <div className="cartsImg">
                    <img src={`https://image.tmdb.org/t/p/original${movie ? movie.backdrop_path : "Img Not Found"}`} alt="Img not Found" />
                </div>
                <div className="cartsInfo">
                    <h3>{movie ? movie.original_title : " Nai"}</h3>
                    <span>{movie ? movie.vote_average : " Nai"}</span>
                    <span className='icon'><IoIosStar /></span>
                    <p>{movie ? movie.release_date : "Nai"}</p>
                </div>

            </Link>
            }
        </div>
    );
};

export default Carts;