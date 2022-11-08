import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Pages/Blogs/Blogs";
import Home from "../components/Pages/Home/Home";
import LogIn from "../components/Pages/LogIn/LogIn";
import Register from "../components/Pages/Register/Register";
import UserReviews from "../components/Reviews/UserReviews";
import AddService from "../components/Services/AddService";
import AllServices from "../components/Services/AllServices";
import ServiceDetails from "../components/Services/ServiceDetails";
import Layout from "../Layout/Layout";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/login', element: <LogIn></LogIn> },
            { path: '/register', element: <Register></Register> },
            { path: '/services', element: <AllServices></AllServices> },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            { path: '/blogs', element: <Blogs></Blogs> },
            { path: '/userReviews', element: <PrivateRoute><UserReviews></UserReviews></PrivateRoute> },
            { path: '/addService', element: <PrivateRoute><AddService></AddService></PrivateRoute> }
        ]
    }
]);

export default routes;
