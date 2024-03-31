import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import MyListingTable from "./MyListingTable";
import Swal from "sweetalert2";
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet-async";


const MyListing = () => {
    const { user } = useContext(AuthContext);
    const url = `https://wiki-tainment-server.vercel.app/my-listing-content?email=${user?.email}`;
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setLoading(true); // Set loading state to true when starting the fetch
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setContent(data);
          setLoading(false); // Set loading state to false when fetch is complete
        })
        .catch((error) => {
          Swal("Error!", "Failed to fetch data. Please try again later."+error.message);
          setLoading(false); // Set loading state to false even if there's an error
        });
    }, [url]); 



    if(loading){
      return <Loader/>
    }

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
            fetch(
              `https://wiki-tainment-server.vercel.app/my-listing-content-delete/${id}`,
              {
                method: "DELETE",
              }
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire(
                    "Deleted!",
                    "Your content has been deleted.",
                    "success"
                  );
                  const remaining = content.filter(() => content._id !== id);
                  setContent(remaining);
                }
              });
          }
        });
    }

    
    return (
        <>
              <Helmet>
    <title>My Listing | WikiTainment</title>
  </Helmet>
         <h1 className="text-center text-4xl text-black dark:text-white font-extrabold">My Listing {content.length} Contents</h1>
    <div className="overflow-x-auto">
    <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
        <thead>
            <tr className="bg-red-100 text-black">
                <th className="py-4 px-6 text-lg text-left border-b">Name</th>
                <th className="py-4 px-6 text-lg text-left border-b">Category</th>
                <th className="py-4 px-6 text-lg text-left border-b">Genre</th>
                <th className="py-4 px-6 text-lg text-left border-b">Rating</th>
                <th className="py-4 px-6 text-lg text-left border-b">Released</th>
                <th className="py-4 px-6 text-lg border-b text-end">Action</th>
                <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
        </thead>
        <tbody>
        {content?.map((items) => (
          <MyListingTable
            key={content._id}
            items={items}
            handleDelete={handleDelete}
          ></MyListingTable>
        ))}
  
        </tbody>
    </table>
</div>

     
        </>
    );
};

export default MyListing;