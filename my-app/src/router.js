import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Asignatura from "./pages/Asignaturas/Asignaturas";
import LayaoutPublic from "./pages/LayoutPublic";
import NotFound from "./components/NotFound";
import Profesorado from "./pages/Profesorado/Profesorado";
import subject from "./data/subjects.json";
import profesores from "./data/profesores.json";
import Sidebar from "./pages/Horario/ListHorario";
import IndexHorario from "./pages/Horario/pages/HorarioEdit/IndexHorario"
import ListHorario from './pages/Horario/ListHorario';

export const router = createBrowserRouter(
[
    {
        path:"/",
        element: <LayaoutPublic/>,
        errorElement: <NotFound />,
        children: [
            {
                path: 'horario/',
                element: <ListHorario/>,
                children:[
                  {
                    path: ':horarioid',
                    element: <IndexHorario/>
                  }
                ]
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