import { createBrowserRouter } from "react-router-dom";

import Asignatura from "./pages/Asignaturas/ResultAsignaturas";
import LayoutPublic from "./pages/LayoutPublic";
import NotFound from "./components/NotFound";
import Profesorado from "./pages/Profesorado/ResultProfesorado";
import ListHorarios from './pages/Horario/ListHorarios';
import PageHorario from "./pages/Horario/pages/HorarioEdit/PageHorario";
<<<<<<< HEAD
import LoginForm from "./pages/Login/LoginForm";
import RegisterForm from "./pages/Register/RegisterForm";



function importarJSON(nombreArchivo) {
  try {
    const datos = require(`./datos/${nombreArchivo}.json`);
    return datos;
  } catch (error) {
    console.error(`Error al importar archivo JSON: ${error}`);
    return null;
  }
}

=======
import HomeAsignaturas from "./pages/Asignaturas/HomeAsignaturas";
import HomeProfesorado from "./pages/Profesorado/HomeProfesorado";
import RegisterHome from './pages/Register/RegisterHome';
import LoginForm from "./pages/Login/LoginForm";
>>>>>>> main
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
    {
      path: "/Login",
      element: <LoginForm />
    },
    {
      path: "/Register",
      element: <RegisterHome />
    }
  ])
