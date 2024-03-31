import { useLoaderData } from "react-router-dom";
import Category from "./Category";
import HeroOne from "./HeroOne";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const categoryData = useLoaderData();
    return (
        <div className="max-w-screen-3xl  mx-auto bg-white dark:bg-gray-900 " >
                <Helmet>
              <title>Home | WikiTainment</title>
            </Helmet>
<HeroOne/>
  <Category categoryData={categoryData}/>          
        </div>
    );
};

export default Home;