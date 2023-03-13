import Carts from "../Cart/Carts";
import Upcomming from "../Upcomming/Upcomming";
import './Popular.css';

const Popular = ({popularMovies}) => {
    return (
        <>
        <h3 className="what__popolar">What's Popular</h3>
        <div className="popular__list">
            <div className="carts__list">
                {
                    popularMovies.map(movie => <Carts movie={movie}/>)
                }
            </div>
        </div>
        <Upcomming />
        </>
    );
};

export default Popular;