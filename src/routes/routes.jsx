import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout';
import SignUp from '../Components/Pages/SignUp';
import SignIn from '../Components/Pages/SignIn';
import ErrorPage from '../Components/Pages/ErrorPage';
import AdMovies from '../Components/Pages/AdMovies';
import PrivateRoutes from './PrivateRoutes';
 
import MovieDetails from '../Components/Pages/MovieDetails';
import AllMovies from '../Components/Pages/AllMovies';
import Favorite from '../Components/Pages/Favorite';

const routes = createBrowserRouter([
    {
      path: "/",
      element:<HomeLayout></HomeLayout>,
      loader: ()=>fetch(`http://localhost:5000/movies`)
    },
    {
      path:"/movies",
      element:<AllMovies></AllMovies>,
      loader:()=>fetch('http://localhost:5000/movies')
    },
    {
      path:"/movies/:id",
      element:
      <PrivateRoutes><MovieDetails></MovieDetails></PrivateRoutes>,
      loader: ({params})=>fetch(`http://localhost:5000/movies/${params.id}`)
    },
    
    {
      path:"/add-movie",
      element:<PrivateRoutes>
        <AdMovies></AdMovies>
      </PrivateRoutes>
    },
    {
      path:"/favorites",
      element:<PrivateRoutes>
        <Favorite></Favorite>
      </PrivateRoutes>
    },
    {
        path:"/register",
        element:<SignUp></SignUp>
    },
    {
        path:"/login",
        element:<SignIn></SignIn>
    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    }
  ]);

export default routes;