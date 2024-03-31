/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CategoryCard = ({items}) => {
    const {Name}= items;
    return (
   <Link to={`/all-content-category-sort/${Name}`}>
        <div className="hover:scale-110 scale-100 transition-all duration-100  flex flex-col items-center p-6 space-y-3 text-center bg-red-500 rounded-xl dark:bg-red-500">

<h1 className="text-2xl font-semibold text-white capitalize ">
 {Name}
</h1>

</div>
   </Link>

    );
};

export default CategoryCard;