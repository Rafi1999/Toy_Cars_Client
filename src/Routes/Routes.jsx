import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import ErrorPage from "../Components/ErrorPage";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import Blogs from "../Components/Blogs/Blogs";
import AllToys from "../Components/AllToys/AllToys";
import MyToys from "../Components/MyToys/MyToys";
import AddToy from "../Components/AddToy/AddToy";
import ToyDetails from "../Components/ToyDetails/ToyDetails";
import PrivateRoute from "../Components/Providers/PrivateRoute/PrivateRoute";
import UpdateToy from "../Components/UpdateToy/UpdateToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path : '/blogs',
                element : <Blogs></Blogs>
            },
            {
                path : '/allToys',
                element : <AllToys></AllToys>
            },
            {
                path : '/myToys',
                element : <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path : '/addToy',
                element : <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path : "/allToyss/:id",
                element : <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://toy-cars-server-blue.vercel.app/alltoyss/${params.id}`)    
            },
            {
                path : "/updateToy/:id",
                element : <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
            }
        ]
    },
]);

export default router;