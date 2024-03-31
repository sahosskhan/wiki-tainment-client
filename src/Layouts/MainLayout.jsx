import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const MainLayout = () => {
    return (
        <div className="bg-white dark:bg-gray-900">
            <Navbar/>
          <Outlet/>
          <Footer/>
            
        </div>
    );
};

export default MainLayout;