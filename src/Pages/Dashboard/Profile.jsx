import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { Helmet } from "react-helmet-async";


const Profile = () => {
    const { user} = useContext(AuthContext);
    return (
<main className="flex justify-center items-center h-screen">
<Helmet>
    <title>Profile | WikiTainment</title>
  </Helmet>
<div className=" mx-auto">
  <div className="bg-red-50 max-w-xl rounded-lg shadow-lg w-80 text-white">
    <div className="text-center py-4">
      <img src={user?.photoURL} alt="Profile Picture" className="rounded-full w-32 mx-auto" />
    </div>
    <div className="px-6 pb-4">
   
      <p className="text-lg text-black font-bold text-left"><span className="text-black">{user?.displayName}</span></p>
      <p className="text-lg text-black font-bold text-left"><i className="fa-regular fa-user"></i> <span className="text-black"> {user?.email ==="sahosskhan@gmail.com"? "Admin" : "User"   }</span></p>
      <p className="text-lg text-black font-bold text-left"><i className="fa-regular fa-envelope"></i> <span className="text-black">{user?.email}</span></p>
    </div>
  </div>
</div>
</main>

    );
};

export default Profile;