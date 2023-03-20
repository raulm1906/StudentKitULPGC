import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Asignatura from "./pages/Asignaturas/Asignaturas";
import LayaoutPublic from "./pages/LayoutPublic";
import NotFound from "./components/NotFound";
import Profesorado from "./pages/Profesorado/Profesorado";
import subject from "./data/subjects.json";
import profesores from "./data/profesores.json"

export const router = createBrowserRouter(
[
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
                element: <Profesorado profesor={profesores[0]}/>,
        
            },
        ],
    },
    

])