import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Asignatura from "./pages/Asignaturas/Asignaturas";
<<<<<<< HEAD
import LayaoutPublic from "./pages/LayoutPublic";
import NotFound from "./components/NotFound";
import Profesorado from "./pages/Profesorado/Profesorado";
import subject from "./data/subjects.json";
import profesores from "./data/profesores.json"
=======
import LayoutPublic from "./pages/LayoutPublic";
import NotFound from "./components/NotFound";
import Profesorado from "./pages/Profesorado/Profesorado";
import subject from "./data/subjects.json";
import profesores from "./data/profesores.json";
import ListHorarios from './pages/Horario/ListHorarios';
import PageHorario from "./pages/Horario/pages/HorarioEdit/PageHorario";



function importarJSON(nombreArchivo) {
  try {
    const datos = require(`./datos/${nombreArchivo}.json`);
    return datos;
  } catch (error) {
    console.error(`Error al importar archivo JSON: ${error}`);
    return null;
  }
}
>>>>>>> main

export const router = createBrowserRouter(
[
    {
        path:"/",
<<<<<<< HEAD
        element: <LayaoutPublic/>,
        errorElement: <NotFound />,
        children: [
            {
                path:"/",
                element: <App />,
            },
=======
        element: <LayoutPublic/>,
        errorElement: <NotFound />,
        children: [
            {
                path: 'horario/',
                element: <ListHorarios/>,
                children:[
                  {
                    path: ':horarioid',
                    element: <PageHorario/>
                  }
                ]
              },
>>>>>>> main
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