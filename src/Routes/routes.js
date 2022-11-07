import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import LogIn from "../components/Pages/LogIn/LogIn";
import Register from "../components/Pages/Register/Register";
import Layout from "../Layout/Layout";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/login', element: <LogIn></LogIn> },
            { path: '/register', element: <Register></Register> }
        ]
    }
]);

export default routes;
