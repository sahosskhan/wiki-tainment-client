/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Authentication/AuthProvider";
import { Helmet } from "react-helmet-async";
import Loader from "../../Components/Loader";

const SinglePage = () => {
  
    const items = useLoaderData();
    const {_id, contentName, contentCategory, contentReleased, contentGenre, contentRating, contentRuntime, contentDirector, contentWriter, contentPoster, contentCast,contentPlot, contentTrailer, contentSource } = items || {};

 const Cid = _id
    const inputDate =  contentReleased ;
    const date = new Date(inputDate);
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    const { user } = useContext(AuthContext);

    const name = user?.displayName;
    const email = user?.email;
    const image = user?.photoURL;

    const isAdmin = user?.email === "sahosskhan@gmail.com";



    const url = `https://wiki-tainment-server.vercel.app/my-watchlist-collection?email=${user?.email}`;
    const [watchListData, setWatchListData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true); // Set loading state to true before fetch
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setWatchListData(data);
          setLoading(false); // Set loading state to false after fetch
        });
    }, [url]);


    const idArray = watchListData.map(item => item.Cid);
    const isUIDInArray = idArray.includes(_id);

    if(loading) { return<Loader/>; }





    const WatchlistHandle = () => {
     
    const WatchlistData = {Cid,contentName, contentCategory, contentReleased, contentGenre, contentRating, contentRuntime, contentDirector, contentWriter, contentPoster, contentCast,contentPlot, contentTrailer, contentSource, name, email, image,}

    fetch(
      "https://wiki-tainment-server.vercel.app/watchlist-collection",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(WatchlistData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Successfully!",
            text: "Content Added In Watchlist Complete.",
            confirmButtonText: "Ok",
          }).then(() => {
            window.location.href = "/dashboard/my-watchlist";
          });
        }
      });
      };
    
    
    return (
        <div>
              <Helmet>
    <title>{contentName} | WikiTainment</title>
  </Helmet>
         <div className='max-w-screen-lg container mx-auto '>
          <div className='flex flex-col gap-6'>
          <div className= 'flex lg:flex-row flex-col lg:items-start md:items-start items-center justify-between container mx-auto '>
      <div className='text-2xl mt-3 text-black dark:text-white font-extrabold'>{contentName}</div>
<div className="flex gap-8 ">
<div className='text-lg font-bold hover:scale-110 scale-100 transition-all duration-100 bg-red-500 w-fit py-2 px-6 text-white dark:text-black  rounded-md mt-2'><i className="fa-solid fa-language"></i> {contentCategory}</div>
      <div className='font-bold text-lg hover:scale-110 scale-100 transition-all duration-100 bg-red-500 w-fit py-2 px-6 text-black dark:text-white rounded-md mt-2'><i className="fa-solid fa-circle-play"></i> {contentGenre}</div>
</div>
    </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>

<div className='col-span-4 flex flex-col gap-8'>
<h1 className="text-lg rounded-md font-black bg-gray-200 dark:bg-gray-400 hover:scale-110 scale-100 transition-all duration-100 w-fit py-2 px-7">{contentRating} <i className="text-amber-400 fa-solid fa-star"></i> IMDb Rating</h1>

      <div className='flex flex-col lg:items-start md:items-start items-center gap-2'>
 <div className='text-xl font-semibold  flex  flex-row items-center gap-2 '>
          <div className="text-black font-black dark:text-white">Directed by {contentDirector}</div>
        </div>
        <div className='flex flex-row items-center gap-4  text-gray-800 dark:text-gray-500 font-bold'
        >
          <div>Written by {contentWriter}</div>
        </div>
      </div>

      <hr />
      <div className='lg:text-start md:text-start text-center text-lg font-light text-gray-700 dark:text-gray-400'>
        {contentPlot}
      </div>
      <hr />
     <div className="container mx-auto">
     <iframe className="w-full h-[310px] rounded-lg" src={contentTrailer} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
     </div>

    </div>


            <div className='md:col-span-3 order-first md:order-last mt-10 container mx-auto'>
          <img className="rounded-lg " src={contentPoster} alt="" />
          {!isAdmin ? (
                            !isUIDInArray ?
                                <button onClick={WatchlistHandle} className="mt-10 w-full bg-red-500 hover:scale-110 scale-100 transition-all duration-100 text-xl font-bold text-white py-2 px-4 rounded-md">Add To Watchlist</button>
                                :
                                <button className="mt-10 w-full bg-gray-300 cursor-not-allowed hover:scale-110 scale-100 transition-all duration-100 text-xl font-bold text-gray-700 py-2 px-4 rounded-md">Already in Watchlist</button>
                        ) : (
                            <button className="mt-10 w-full bg-gray-300 cursor-not-allowed text-xl hover:scale-110 scale-100 transition-all duration-100 font-bold text-white py-2 px-4 rounded-md">Admin Can&apos;t Add </button>
                        )}
            </div>


          </div>
        </div>
<div className=" max-w-screen-lg container mx-auto mt-6">
  <table className="w-full border-2 border-black dark:border-gray-400 text-black dark:text-white">
    <tbody>
      <tr>
        <td className="py-2 px-4 border-2 border-black dark:border-gray-400">Released</td>
        <td className="py-2 px-4 border-2 border-black dark:border-gray-400 ">{formattedDate}</td>
      </tr>
      <tr>
        <td className="py-2 px-4 border-2 border-black dark:border-gray-400 ">Runtime</td>
        <td className="py-2 px-4 border-2 border-black dark:border-gray-400 ">{contentRuntime} min</td>
      </tr>
      <tr>
        <td className="py-2 px-4 border-2 border-black dark:border-gray-400 ">Casting</td>
        <td className="py-2 px-4 border-2 border-black dark:border-gray-400 ">{contentCast}</td>
      </tr>
    </tbody>
  </table>
</div>


        </div>
    );
};

export default SinglePage;