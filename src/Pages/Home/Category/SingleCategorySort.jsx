import { useLoaderData } from "react-router-dom";
import SingleSortCard from "./SingleSortCard";
import NoContent from "../../../Components/NoContent";
import { Helmet } from "react-helmet-async";

const SingleCategorySort = () => {
    const CategorySpecificData = useLoaderData();
if (CategorySpecificData.length === 0) return<NoContent/>

    return (
        <div className="container mx-auto my-10 min-h-[71.5vh]">
                 <Helmet>
              <title>Category | WikiTainment</title>
            </Helmet>
      <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {CategorySpecificData?.map((items) => (
          <SingleSortCard key={items._id} items={items}></SingleSortCard>
        ))}
      </div>
        </div>
    );
};

export default SingleCategorySort;