import { createBrowserRouter } from "react-router-dom";

import Asignatura from "./pages/Asignaturas/ResultAsignaturas";
import LayoutPublic from "./pages/LayoutPublic";
import NotFound from "./components/NotFound";
import Profesorado from "./pages/Users/editUsers";
import ListHorarios from './pages/Horario/ListHorarios';
import PageHorario from "./pages/Horario/pages/HorarioEdit/PageHorario";
import HomeAsignaturas from "./pages/Asignaturas/HomeAsignaturas";
import HomeProfesorado from "./pages/Profesorado/HomeProfesorado";
import RegisterHome from './pages/Register/RegisterHome';
import LoginForm from "./pages/Login/LoginForm";
import editUser from "./pages/Users/editUsers";
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
          path: "/editUser",
          element: <editUser />,

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
    },

  ])
