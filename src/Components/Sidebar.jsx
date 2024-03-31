import { useContext, useState } from "react";
import { AuthContext } from "../Pages/Authentication/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const { user, LogOut } = useContext(AuthContext);

  const handleSignOut = () => {
    LogOut();
  };
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className="bg-gray-600 text-gray-800 flex justify-between md:hidden">
        <Link to="/">
          <div className="block cursor-pointer p-4 font-bold">
            <div className=" flex gap-2 items-center ">
              <img
                className="h-10 w-auto"
                src="https://i.ibb.co/xhLRZ5m/image.png"
                alt=""
              />
              <h1 className="mt-1 text-2xl font-bold text-red-600">
                WikiTainment
              </h1>
            </div>
          </div>
        </Link>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-red-100 dark:bg-gray-800 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out `}
      >
        <div>
          <Link to="/" className="mx-auto flex justify-center items-center">
            <div className=" flex gap-2 items-center ">
              <img
                className="h-10 w-auto"
                src="https://i.ibb.co/xhLRZ5m/image.png"
                alt=""
              />
              <h1 className="mt-1 text-2xl font-bold text-red-600">
                WikiTainment
              </h1>
            </div>
          </Link>
          <div className="flex flex-col items-center mt-6 -mx-2">
            <img
              className="object-cover w-24 h-24 mx-2 rounded-full"
              src={user?.photoURL}
              alt="avatar"
            />
            <h4 className="mx-2 mt-2 text-xl font-bold text-gray-800 dark:text-white">
              {user?.displayName}
            </h4>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
            <NavLink
                to="/dashboard"
                className="flex items-center px-4 py-2 hover:bg-red-400 text-black  rounded-lg  dark:text-white text-xl"
              >
              <i className="fa-solid fa-id-card-clip"></i>
                <span className="mx-4  font-bold">Profile</span>
              </NavLink>

              <NavLink
                to="/dashboard/my-watchlist"
                className="flex items-center px-4 py-2 mt-5 hover:bg-red-400 text-black  rounded-lg  dark:text-white text-xl"
              >
                <i className=" fa-solid fa-clipboard-list"></i>
                <span className="mx-4  font-bold">Watch List</span>
              </NavLink>

              

 { user?.email ==="sahosskhan@gmail.com" ?
          <>
          <NavLink
                 to="/dashboard/add-content"
                 className="flex items-center mt-5 hover:bg-red-400 px-4 py-2 text-black  rounded-lg  dark:text-white text-xl"
               >
                 <i className="fa-solid   fa-file-circle-plus"></i>
                 <span className="mx-4  font-bold">Add Content</span>
               </NavLink>
 
               <NavLink
                 to="/dashboard/my-listing-content"
                 className="flex items-center mt-5 hover:bg-red-400 px-4 py-2 text-black  rounded-lg  dark:text-white text-xl"
               >
                <i className="fa-solid fa-rectangle-list"></i>
                 <span className="mx-4  font-bold">My Listing</span>
               </NavLink>
          </>
          : <>
          </>
 }

            </nav>
          </div>
        </div>

        <div>
          <hr />

          <NavLink
            to="/"
            className="flex items-center mt-5 px-4 hover:bg-red-400 py-2 text-black  rounded-lg  dark:text-white text-xl"
          >
            <i className="fa-solid fa-house-chimney"></i>
            <span className="mx-4  font-bold">Home</span>
          </NavLink>

          <div
            onClick={handleSignOut}
            className="flex items-center mt-5 px-4 hover:bg-red-400 py-2 text-black  rounded-lg  dark:text-white text-xl"
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span className="mx-4  font-bold">Logout</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
