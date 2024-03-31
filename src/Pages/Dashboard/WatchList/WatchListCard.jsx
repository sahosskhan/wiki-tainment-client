/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const WatchListCard = ({ items, handleDelete }) => {
    const { _id, contentName, contentCategory, contentGenre, contentRating, contentRuntime, contentDirector, contentPoster,  contentSource} = items;
    return (
        <div className="grid grid-cols-1 md:grid-cols-7 gap-16">
        <div className='col-span-4 flex flex-col gap-4'>
      <div className='flex flex-col lg:items-start md:items-start items-center'>
          <div className="text-black text-xl font-black dark:text-white">{contentName}</div>
    
      </div>

<table className="w-full border-2 border-black dark:border-gray-400 text-black dark:text-white">
    <tbody>
      <tr>
        <td className="py-2 px-4 border-2  border-black dark:border-gray-400">Director</td>
        <td className="py-2 px-4 border-2  border-black dark:border-gray-400">{contentDirector}</td>
      </tr>
      <tr>
        <td className="py-2 px-4 border-2  border-black dark:border-gray-400">Category</td>
        <td className="py-2 px-4 border-2  border-black dark:border-gray-400">{contentCategory}</td>
      </tr>
      <tr>
        <td className="py-2 px-4 border-2  border-black dark:border-gray-400">Genre</td>
        <td className="py-2 px-4 border-2  border-black dark:border-gray-400">{contentGenre}</td>
      </tr>
      <tr>
        <td className="py-2 px-4 border-2 border-black dark:border-gray-400">Runtime</td>
        <td className="py-2 px-4 border-2  border-black dark:border-gray-400">{contentRuntime} min</td>
      </tr>
      <tr>
        <td className="py-2 px-4 border-2 border-black dark:border-gray-400">IMDb Rating</td>
        <td className="py-2 px-4 border-2  border-black dark:border-gray-400">{contentRating}</td>
      </tr>
    </tbody>
  </table>
  
  <div className="flex justify-around gap-4">

  <Link to={contentSource}  className="w-1/2 bg-green-500 hover:scale-110 scale-100 transition-all duration-100 text-xl font-bold text-white py-2 px-4 rounded-md"><i className="fa-brands fa-youtube"></i> Watch</Link>  

  <button  onClick={() => handleDelete(_id)}  className="w-full bg-red-500 hover:scale-110 scale-100 transition-all duration-100 text-xl font-bold text-white py-2 px-4 rounded-md"><i className="fa-solid fa-trash-can"></i> Remove To Watchlist</button>
  </div>

    </div>


            <div className='md:col-span-3 order-first md:order-last container mx-auto'>
          <img className="rounded-lg lg:w-[80%] lg:h-[100%] " src={contentPoster} alt="" />
            </div>    
        </div>
    );
};

export default WatchListCard;