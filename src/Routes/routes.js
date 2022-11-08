import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Blogs from "../components/Pages/Blogs/Blogs";
import Home from "../components/Pages/Home/Home";
import LogIn from "../components/Pages/LogIn/LogIn";
import Register from "../components/Pages/Register/Register";
import AllServices from "../components/Services/AllServices";
import ServiceDetails from "../components/Services/ServiceDetails";
import Layout from "../Layout/Layout";

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
            { path: '/blogs', element: <Blogs></Blogs> }
        ]
    }
]);

export default routes;
