/* eslint-disable react/prop-types */
import CategoryCard from "./CategoryCard";


const Category = ({categoryData}) => {
    const categoryNames = categoryData
    return (
        <div>
<section className="bg-white dark:bg-gray-900 mb-28">
  <div  className="container px-6 py-10 mx-auto">
    <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Explore Our Entertainment <span className="text-red-500">Category </span> <br />That You Can Enjoy A Lot _:)</h1>

    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-3 xl:grid-cols-5">

    {categoryNames ?.map((items) => (
            <CategoryCard key={items.id} items={items}></CategoryCard> 

          ))}
    </div>
  </div>
</section>

        </div>
    );
};

export default Category;