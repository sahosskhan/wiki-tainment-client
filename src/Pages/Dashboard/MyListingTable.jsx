/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const MyListingTable = ({items, handleDelete}) => {
    const {_id, contentName,contentCategory,
    contentReleased,contentGenre, contentRating, UploadTime } = items;
    const date = new Date(contentReleased);
    const formattedDate = date.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/(\d+)([a-z]+)/i, '$1 $2');
const TimeOfUpload = UploadTime;

 // State to keep track of whether delete button should be disabled
 const [isDeleteDisabled, setIsDeleteDisabled] = useState(false);

 useEffect(() => {
     // Function to check if 24 hours have passed since upload time
     const checkTimeElapsed = () => {
         const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
         const uploadTimestamp = new Date(TimeOfUpload).getTime();
         const currentTimestamp = new Date().getTime();
         const timeDifference = currentTimestamp - uploadTimestamp;
         
         // If 24 hours have passed, disable the delete button
         if (timeDifference >= twentyFourHours) {
             setIsDeleteDisabled(true);
         }
     };

     // Initial check
     checkTimeElapsed();

     // Set interval to periodically check
     const interval = setInterval(checkTimeElapsed, 3600000); // Check every hour

     // Clear interval when component unmounts
     return () => clearInterval(interval);
 }, [TimeOfUpload]);

    return (
        <>
                     <tr className="bg-white hover:bg-red-50 rounded-lg dark:bg-gray-800 text-black dark:text-white border-b hover:scale-110 scale-10 transition-all duration-100">
                <td className="py-4 px-6 border-b text-xl font-medium">{contentName}</td>
                <td className="py-4 px-6 border-b text-lg font-medium">{contentCategory}</td>
                <td className="py-4 px-6 border-b text-lg font-medium">{contentGenre}</td>
                <td className="py-4 px-6 border-b text-lg font-medium">{contentRating}</td>
                <td className="py-4 px-6 border-b text-lg font-medium">{formattedDate}</td>
                <td className="py-4 px-6 border-b text-end">
                <Link to={`/dashboard/edit-my-listing-content/${_id}`}>
                    <button  className={`bg-green-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md ${isDeleteDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isDeleteDisabled} >Edit</button>
                    </Link>
                </td>
                <td className="py-4 px-6 border-b text-end">
                    <button onClick={() => handleDelete(_id)} className="bg-red-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Delete</button>
                </td>
            </tr>   
        </>
    );
};

export default MyListingTable;