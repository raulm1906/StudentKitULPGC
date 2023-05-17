import { createBrowserRouter } from "react-router-dom";

import Asignatura from "./pages/Asignaturas/ResultAsignaturas";
import LayoutPublic from "./pages/LayoutPublic";
import Profesorado from "./pages/Profesorado/ResultProfesorado";
import ListHorarios from './pages/Horario/ListHorarios';
import PageHorario from "./pages/Horario/pages/HorarioEdit/PageHorario";
import LoginForm from "./pages/Login/LoginForm";
import HomeAsignaturas from "./pages/Asignaturas/HomeAsignaturas";
import HomeProfesorado from "./pages/Profesorado/HomeProfesorado";
import RegisterHome from './pages/Register/RegisterHome';
import FaqForm from "./pages/FAQ/FaqForm";


export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LayoutPublic />,
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
      path: "/login",
      element: <LoginForm />
    },
    {
      path: "/register",
      element: <RegisterHome />
    },
    {
      path: "/FAQ",
      element: <FaqForm />
    }
  ])
