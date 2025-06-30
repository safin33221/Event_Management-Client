import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Events from "../Pages/Events/Events";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/event',
                Component: Events
            },

        ]
    },
    {
        path: '/auth',
        children: [
            {
                path: 'login',
                Component: Login

            },
            {
                path: 'register',
                Component: Register

            }
        ]
    }
])
export default router