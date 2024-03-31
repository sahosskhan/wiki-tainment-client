import { Link } from "react-router-dom";

const Logo = () => {
  return (
 <Link to="/">
    <div className=" flex  items-center lg:ml-8 ">
      <img
        className="lg:h-14 h-10 "
        src="https://i.ibb.co/xhLRZ5m/image.png"
        alt=""
      />
      <h1 className="ml-2 mt-2 lg:text-3xl md:text-3xl text-2xl font-bold text-red-600">WikiTainment</h1>
    </div>
 
 </Link>
  );
};

export default Logo;
