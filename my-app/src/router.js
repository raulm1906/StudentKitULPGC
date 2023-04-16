import { createBrowserRouter } from "react-router-dom";

import Asignatura from "./pages/Asignaturas/ResultAsignaturas";
import LayoutPublic from "./pages/LayoutPublic";
import NotFound from "./components/NotFound";
import Profesorado from "./pages/Profesorado/ResultProfesorado";
import ListHorarios from './pages/Horario/ListHorarios';
import PageHorario from "./pages/Horario/pages/HorarioEdit/PageHorario";
import HomeAsignaturas from "./pages/Asignaturas/HomeAsignaturas";
import HomeProfesorado from "./pages/Profesorado/HomeProfesorado";

function importarJSON(nombreArchivo) {
  try {
    const datos = require(`./datos/${nombreArchivo}.json`);
    return datos;
  } catch (error) {
    console.error(`Error al importar archivo JSON: ${error}`);
    return null;
  }
}

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LayoutPublic />,
      errorElement: <NotFound />,
      children: [
        {
          path: 'horario/',
          element: <ListHorarios />,
          children: [
            {
              path: ':horarioid',
              element: <PageHorario />
            }
          ]
        },
        {
          path: "/HomeAsignatura",
          element: <HomeAsignaturas />,

        },
        {
          path: "/HomeAsignatura/:id",
          element: <Asignatura />,
        },
        {
          path: "/HomeProfesorado",
          element: <HomeProfesorado />,

        },
        {
          path: "/HomeProfesorado/:id",
          element: <Profesorado />,
        },
      ],
    },


  ])