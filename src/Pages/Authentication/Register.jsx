/* eslint-disable no-unused-vars */
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";
import { Helmet } from "react-helmet-async";


const Register = () => {

  const { createUser, googleLogin, } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const Google = () => {
    googleLogin()
      .then((result) => {
        Swal.fire({
          title: "Successfully!",
          text: "Login Complete With Google ",
          icon: "success",
          confirmButtonText: "Done",
        });

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  const SignUpHandle = (e) => {
    e.preventDefault();
    setPassword("");
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("photo");
  


    if (password.length < 6) {
      setPassword("Error! Password must contain minimum 6 characters");
      return;
    } else if (!/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password)) {
      setPassword(
        "Error! Password must contain special characters and capital latter"
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Successfully!",
          text: "Registration Complete.",
          icon: "success",
          confirmButtonText: "Done",
        });
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
    }


    return (
        <div>
                                  <Helmet>
    <title>Registration | WikiTainment</title>
  </Helmet>
                  <div className="min-h-screen  bg-white dark:bg-gray-900 p-10">
<div className="flex items-center text-xl justify-center py-4 overflow-x-auto whitespace-nowrap">

  <Link to="/" className="text-gray-600 dark:text-gray-200 ">
   Home
  </Link>
  <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
  <i className="fa-solid fa-arrow-right-long"></i>
  </span>
  <Link to="/register" className="text-red-600 dark:text-red-400 ">
    Register
  </Link>
</div>
<h1 className="text-4xl font-black text-center my-8">Please Create Account Here!</h1>
<div className="w-full max-w-lg p-6 m-auto mx-auto bg-red-50 rounded-lg shadow-md dark:bg-gray-600 ">
  <div className="flex justify-center mx-auto">
  <div className=" flex  items-center lg:ml-8 ">
      <img
        className="lg:h-14 h-10 "
        src="https://i.ibb.co/xhLRZ5m/image.png"
        alt=""
      />
      <h1 className="ml-2 mt-2 lg:text-3xl md:text-3xl text-2xl font-bold text-red-600">WikiTainment</h1>
    </div>
  </div>

  <form onSubmit={SignUpHandle} className="mt-6 form-control">
 

    <div className=" form-control">
        <label  className="block text-lg text-gray-800 dark:text-gray-200">User Name</label>
      <input type="text" name="name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter Your Full Name" />
    </div>

    <div className="mt-4 form-control">
        <label  className="block text-lg text-gray-800 dark:text-gray-200">User Image</label>
      <input type="text" name="photo" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter Your Image URL" />
    </div>

    <div className="mt-4 form-control">
      <label className="block text-lg text-gray-800 dark:text-gray-200">User Email</label>
      <input type="email" name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter Your Email Address" />
    </div>

    <div className="mt-4 form-control">
        <label htmlFor="password" className="block text-lg text-gray-800 dark:text-gray-200">Password</label>
      <input type="password" name="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter Your Strong Password" />
    </div>
    {password && <p className="text-red-700 font-bold mt-5  "> <i className="fa-solid fa-triangle-exclamation"></i> {password}</p>}

    <div className="mt-8 form-control flex lg:flex-row md:flex-row flex-col gap-5 items-center justify-center">
      <button className="w-[60%] px-6 py-2 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
      Register
      </button>
      
    <button onClick={Google} type="button" className="flex items-center justify-center w-full  px-6 py-2 mx-2 text-lg font-medium text-white transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:bg-red-400 focus:outline-none">
    <i className="fa-brands fa-google"></i>
      <span className="mx-2 inline ">Continue with Google</span>
    </button>
  

    </div>
  </form>


  <p className="mt-8 text-lg font-light text-center text-gray-400"> Already have an account? <Link to="/login" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Login</Link></p>
</div>
  </div>  
        </div>
    );
};

export default Register;