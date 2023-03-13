import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Asignatura from "../pages/Asignaturas";
import Header from "../pages/cabecera";
import LayaoutPublic from "./LayoutPublic";
import NotFound from "./NotFound";
import Profesorado from "../pages/Profesorado";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <LayaoutPublic/>,
        errorElement: <NotFound />,
        children: [
            {
                path:"/",
                element: <App />,
            },
            {
                path:"/Asignatura",
                element: <Asignatura />,
            },
            {
                path:"/Profesorado",
                element: <Profesorado />,
        
            }
        ],
    },
    

])