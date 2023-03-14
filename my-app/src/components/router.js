import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Asignatura from "../pages/Asignaturas";
import Header from "../pages/cabecera";
import LayaoutPublic from "./LayoutPublic";
import NotFound from "./NotFound";
import Profesorado from "../pages/Profesorado";
import subject from "../data/subjects.json" 
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
                element: <Asignatura asignatura={subject[0]} />,
            },
            {
                path:"/Profesorado",
                element: <Profesorado />,
        
            }
        ],
    },
    

])