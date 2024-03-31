/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditContent = () => {
  const items = useLoaderData();
  const {_id, contentName, contentCategory, contentReleased, contentGenre, contentRating, contentRuntime, contentDirector, contentWriter, contentPoster, contentCast,contentPlot, contentTrailer, contentSource} =
    items || {};



const [selectedGenre, setSelectedGenre] = useState("");
const [selectedCategory, setSelectedCategory] = useState("");
const Genre = ["Movie", "WebSeries", "Documentary", "Drama", "Animated"];

const Category = [
  "English",
  "Hindi",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Punjabi",
  "Bangla(Kolkata)",
  "Bangla(BD)",
  "Chinese",
  "Korean",
  "Japanese",
  "Indonesian",
  "Pakistani",
  "Others",
];


const handleGenreChange = (event) => {
  setSelectedGenre(event.target.value);
};

const handleCategoryChange = (event) => {
  setSelectedCategory(event.target.value);
};


const HandelEditContent = (event) => {
  event.preventDefault();
  const form = event.target;
  const contentName = form.contentName.value;
  const contentReleased = form.contentReleased.value;
  const contentGenre = form.contentGenre.value;
  const contentCategory = form.contentCategory.value;
  const contentRating = form.contentRating.value;
  const contentRuntime = form.contentRuntime.value;
  const contentWriter = form.contentWriter.value;
  const contentDirector = form.contentDirector.value;
  const contentPoster = form.contentPoster.value;
  const contentTrailer = form.contentTrailer.value;
  const contentSource = form.contentSource.value
  const contentPlot  = form.contentPlot.value;
  const contentCast = form.contentCast.value;

  const EditedContent =
    { contentName, contentCategory, contentReleased, contentGenre, contentRating, contentRuntime, contentDirector, contentWriter, contentPoster, contentCast,contentPlot, contentTrailer, contentSource} || {};

         
          form.reset();
          setSelectedGenre("");
          setSelectedCategory("");

          fetch(
            `https://wiki-tainment-server.vercel.app/my-listing-content-edit/${_id}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(EditedContent),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.modifiedCount > 0) {
                Swal.fire({
                  title: "Successfully!",
                  text: "Content Update Complete.",
                  icon: "success",
                  confirmButtonText: "Done",
                }).then(() => {
                  window.location.href = "/dashboard/my-listing-content";
                });
              }
            });
    
  };




    return (
      <div>
              <Helmet>
    <title>Edit {contentName} | WikiTainment</title>
  </Helmet>
      <div className="mt-8 container mx-auto">
        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-opacity-20 bg-white backdrop-blur-3xl border-none filter drop-shadow-md rounded-2xl p-2 lg:max-w-5xl shadow-gray-300/50 ">
          <h1 className="text-4xl font-bold text-center text-red-700">
            Edit Content Here
          </h1>

          <form onSubmit={HandelEditContent} className="mt-6">
            {/* Row 1 */}
            <div className="flex gap-5">
{/* Input 1 */}
              <div className="from-control flex-1 ">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                  Content Name
                </label>
                <input
                  type="text"
                  name="contentName"
                  defaultValue={contentName}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
{/* Input 2 */}
              <div className="from-control flex-1">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                Content Released
                </label>
                <input
                 type="date"
                  name="contentReleased"
                  defaultValue={contentReleased}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

{/* Row 2 */}
            <div className="flex gap-5">
{/* Input 3 */}
              <div className="from-control flex-1 mt-5">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                  Content Genre
                </label>
                <select
  onChange={handleGenreChange}
  name="contentGenre"
  defaultValue={contentGenre || ""} // Set default value for Genre select box
  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
>
  <option disabled value="">
    Select Content Genre
  </option>
  {Genre.map((brand, index) => (
    <option key={index} value={brand}>
      {brand}
    </option>
  ))}
</select>
              </div>
{/* Input 4 */}
              <div className="from-control flex-1 mt-5">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                  Content Category
                </label>
                <select
  onChange={handleCategoryChange}
  name="contentCategory"
  defaultValue={contentCategory || ""} // Set default value for Category select box
  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
>
  <option disabled value="">
    Select Content Category
  </option>
  {Category.map((type, index) => (
    <option key={index} value={type}>
      {type}
    </option>
  ))}
</select>
              </div>
            </div>

{/* Row 3 */}
<div className="flex gap-5">
    {/* Input 5 */}
    <div className="from-control flex-1 mt-5">
        <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
            Content IMDb Rating
        </label>
        <input
                  type="number"
                  name="contentRating"
                  step="0.1" // Allow decimals
                  min="1"    // Minimum value
                  max="10"   // Maximum value
                  defaultValue={contentRating}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
    </div>

 {/* Input 6*/}
              <div className="mt-5 from-control flex-1">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                Content Runtime
                </label>
                <input
                  type="number"
                  name="contentRuntime"
                  defaultValue={contentRuntime}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

{/* Row 5 */}
<div className="flex gap-5">
                {/* Input 7*/}
              <div className="from-control  flex-1 mt-5">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                Content Writer
                </label>
                <input
                  type="text"
                  name="contentWriter"
                  defaultValue={contentWriter}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
 {/* Input 8*/}
              <div className="mt-5 from-control flex-1">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                Content Director
                </label>
                <input
                  type="text"
                  name="contentDirector"
                  defaultValue={contentDirector}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
{/* Row 6 */}
 {/* Input 9*/}
            <div className="from-control flex-1 mt-5">
              <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                Content Poster URL
              </label>
              <input
                type="text"
                name="contentPoster"
                defaultValue={contentPoster}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {/* Row 6 */}
 {/* Input 9*/}
 <div className="from-control flex-1 mt-5">
              <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                Content Trailer URL
              </label>
              <input
                type="text"
                name="contentTrailer"
                defaultValue={contentTrailer}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            {/* Row 6 */}
 {/* Input 9*/}
 <div className="from-control flex-1 mt-5">
              <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                Content Source URL
              </label>
              <input
                type="text"
                name="contentSource"
                defaultValue={contentSource}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
{/* Row 7 */}
 {/* Input 10*/}
            <div className="mt-5">
            <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                Content Cast
              </label>
          <textarea defaultValue={contentCast} id="contentCast" name="contentCast" rows="4" className="mt-1 p-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40 w-full"></textarea>
        </div>
{/* Row 8 */}
 {/* Input 11*/}
        <div className="mt-5">
        <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                Content Plot
              </label>
          <textarea defaultValue={contentPlot}  id="contentPlot" name="contentPlot"  rows="4" className="mt-1 p-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40 w-full"></textarea>

          </div>

<input className="btn btn-block mt-5 border-none text-xl bg-red-500 text-white hover:bg-gray-500"
              type="submit"
              value="Update Content"
            />
          </form>
        </div>
      </div>
    </div>
    );
};

export default EditContent;