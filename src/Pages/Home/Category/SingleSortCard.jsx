/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SingleSortCard = ({items}) => {
    const { _id, contentGenre, contentName, contentPoster } = items || {};
    return (
        <div>
            <div className="flex flex-col hover:scale-110 scale-100 transition-all duration-100 items-center justify-center w-full max-w-sm mx-auto">
                <div className="w-full h-[550px] bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: `url(${contentPoster})`}} />
                <div className="w-56 -mt-10 overflow-hidden bg-gray-200 rounded-lg shadow-lg md:w-64 dark:bg-gray-600">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{contentName}</h3>
                    <div  className="flex items-center justify-between px-3 py-2 bg-gray-300 dark:bg-gray-700 ">
                        <span className="font-bold text-gray-800 dark:text-gray-200">{contentGenre}</span>
                        <Link to={`/single-content/${_id}`}>
                        <button className="hover:scale-110 scale-100 transition-all duration-100 px-2 py-1 text-xs font-semibold text-white uppercase transform bg-red-500 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">View More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleSortCard;
