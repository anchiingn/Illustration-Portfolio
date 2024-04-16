import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import Designs from "../components/Works/Design/Designs";
import Illustrations from "../components/Works/Illustrations/Illustrations";
import About from "../components/About/About";
import Layout from "./Layout";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/Designs',
                element: <Designs />
            },
            {
                path: '/Illustrations',
                element: <Illustrations />
            },
            {
                path: '/About',
                element: <About />
            }
        ]
    }
]);