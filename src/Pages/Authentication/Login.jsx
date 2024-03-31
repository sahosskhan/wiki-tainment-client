/* eslint-disable no-unused-vars */
import { useContext} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet-async";


const Login = () => {

  const { signIn, googleLogin, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  if (loading) {
    return (
      <Loader/>
    );
  }
  const Google = () => {
    googleLogin()
      .then((result) => {
        Swal.fire({
          title: "Successfully!",
          text: "Login Complete With Google ",
          icon: "success",
          confirmButtonText: "Done",
        });
        console.log(result.user);

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

  const HandleLogin = (e) => {
    e.preventDefault();
  

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    

    signIn(email, password)
      .then((result) => {
        Swal.fire({
          title: "Successfully!",
          text: "Login Complete By Account.",
          icon: "success",
          confirmButtonText: "Done",
        });

        navigate(location?.state ? location?.state : "/");
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Password or user email is not correct please try again. " + err.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };









    return (
        <div className="min-h-screen  bg-white dark:bg-gray-900 p-10">
                                  <Helmet>
    <title>Login | WikiTainment</title>
  </Helmet>
<div className="flex items-center text-xl justify-center py-4 overflow-x-auto whitespace-nowrap">

  <Link to="/" className="text-gray-600 dark:text-gray-200 ">
   Home
  </Link>
  <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
  <i className="fa-solid fa-arrow-right-long"></i>
  </span>
  <Link to="/login" className="text-red-600 dark:text-red-400 ">
    Login
  </Link>
</div>
<h1 className="text-4xl font-black text-center my-8">Please Login Here!</h1>
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

  <form onSubmit={HandleLogin} className="mt-6 form-control">
    <div>
      <label  className="block text-lg text-gray-800 dark:text-gray-200">Email</label>
      <input type="email" name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
    </div>
    <div className="mt-4 form-control">
        <label  className="block text-lg text-gray-800 dark:text-gray-200">Password</label>
      <input type="password" name="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
    </div>
    <div className="mt-8 form-control flex lg:flex-row md:flex-row flex-col gap-5 items-center justify-center">
      <button className="w-[64%] px-6 py-2 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
       Login
      </button>
      
    <button  onClick={Google} type="button" className="flex items-center justify-center w-full  px-6 py-2 mx-2 text-lg font-medium text-white transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:bg-red-400 focus:outline-none">
    <i className="fa-brands fa-google"></i>
      <span className="mx-2 inline ">Continue with Google</span>
    </button>
  

    </div>
  </form>


  <p className="mt-8 text-lg font-light text-center text-gray-400"> Do not have an account? <Link to="/register" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</Link></p>
</div>
  </div>
    );
};

export default Login;