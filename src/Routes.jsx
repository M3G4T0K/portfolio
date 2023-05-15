import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import { Home, Paleta } from "./screens";

const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home /> 
    }, 
    {
        path: "/paleta",
        element: <Paleta />
    }
])

export default () => <RouterProvider router={BrowserRouter} />