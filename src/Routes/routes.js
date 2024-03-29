import { createBrowserRouter } from "react-router-dom";
import ContactMe from "../components/ContactMe/ContactMe";
import Blogs from "../components/Pages/Blogs/Blogs";
import Home from "../components/Pages/Home/Home";
import LogIn from "../components/Pages/LogIn/LogIn";
import Register from "../components/Pages/Register/Register";
import EditReview from "../components/Reviews/EditReview";
import UserReviews from "../components/Reviews/UserReviews";
import AddService from "../components/Services/AddService";
import AllServices from "../components/Services/AllServices";
import ServiceDetails from "../components/Services/ServiceDetails";
import ErrorPage from "../components/SharedPages/ErrorPage/ErrorPage";
import Layout from "../Layout/Layout";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/login', element: <LogIn></LogIn> },
            { path: '/register', element: <Register></Register> },
            { path: '/services', element: <AllServices></AllServices> },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://assignment-11-server-khaki.vercel.app/services/${params.id}`)
            },
            { path: '/blogs', element: <Blogs></Blogs> },
            { path: '/userReviews', element: <PrivateRoute><UserReviews></UserReviews></PrivateRoute> },
            { path: '/contactMe', element: <ContactMe></ContactMe> },
            {
                path: '/editReview/:id',
                element: <EditReview></EditReview>,
                loader: ({ params }) => fetch(`https://assignment-11-server-khaki.vercel.app/editReview/${params.id}`)
            }
        ]
    }
]);

export default routes;
