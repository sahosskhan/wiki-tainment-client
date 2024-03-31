import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Pages/Error/ErrorPage';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import DashboardLayout from '../Layouts/DashboardLayout';
import Login from './../Pages/Authentication/Login';
import Register from '../Pages/Authentication/Register';
import PrivateRoute from './PrivateRoute';
import AddContent from '../Pages/Dashboard/AddContent';
import MyListing from '../Pages/Dashboard/MyListing';
import Profile from '../Pages/Dashboard/Profile';
import EditContent from '../Pages/Dashboard/EditContent';
import SingleCategorySort from '../Pages/Home/Category/SingleCategorySort';
import SinglePage from '../Pages/Content/SinglePage';
import MyWatchList from '../Pages/Dashboard/WatchList/MyWatchList';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch("/category.json"),
      },
      {
        path: "/all-content-category-sort/:contentCategory",
        element: <SingleCategorySort/>,
        loader: ({ params }) =>
          fetch(
            `https://wiki-tainment-server.vercel.app/content/${params?.contentCategory}`
          ),
      },
      {
        path: "/single-content/:id",
        element: <SinglePage/>,
        loader: ({ params }) =>
        fetch(
          `https://wiki-tainment-server.vercel.app/my-listing-content-one/${params?.id}`
        ),
      },
      
      
    ],
  },

  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout/></PrivateRoute> ,
    children: [
      {
        path: "/dashboard",
            element: <Profile/>,
      },
      {
        path: "/dashboard/add-content",
            element: <AddContent/>,
      },
      {
        path: "/dashboard/my-listing-content",
            element: <MyListing/>,
      },
      {
        path: "/dashboard/edit-my-listing-content/:id",
            element: <EditContent/>,
            loader: ({ params }) =>
          fetch(
            `https://wiki-tainment-server.vercel.app/my-listing-content-one/${params?.id}`
          ),
      },
      {
        path: "/dashboard/my-watchlist",
            element: <MyWatchList/>,
      },
      
    ],
  },
  {
    path: "/login",
        element: <Login/>,
  },
  {
    path: "/register",
        element: <Register/>,
  }


]);
export default router;
