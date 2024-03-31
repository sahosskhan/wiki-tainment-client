import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Authentication/AuthProvider";
import Loader from "../../../Components/Loader";
import WatchListCard from "./WatchListCard";
import { Helmet } from "react-helmet-async";

const MyWatchList = () => {

    const { user } = useContext(AuthContext);

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
  
    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://wiki-tainment-server.vercel.app/my-single-watchlist-delete/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire(
                  "Successfully!",
                  "This Content Remove From Watchlist.",
                  "warning"
                );
                const remaining = watchListData.filter(
                  (item) => item._id !== id
                );
                setWatchListData(remaining);
              }
            });
        }
      });
    };
  
    // Add loading indicator here
    if (loading) {
      return <Loader/>;
    }





    return (
        <div className=" container mx-auto">
                        <Helmet>
    <title>Watchlist | WikiTainment</title>
  </Helmet>
           <h1 className="text-center lg:text-5xl text-4xl mb-16 mt-6 text-black dark:text-white font-black">Welcome To Watchlist: {watchListData.length}  </h1> 
           <div className=' grid xl:grid-cols-2 grid-cols-1 gap-6'>

           {watchListData?.map((items) => (
          <WatchListCard
            key={watchListData._id}
            items={items}
            handleDelete={handleDelete}
          ></WatchListCard>
        ))}

            </div>

        </div>
    );
};

export default MyWatchList;