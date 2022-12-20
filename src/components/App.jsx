import { lazy } from 'react';

import { Toaster } from 'react-hot-toast';
import { Route, Routes, Navigate } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Layout }  from './Layout';

import  MovieDetails  from '../pages/MovieDetails' 



const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home"/>} />
          <Route path="home" element={<Home/>} />
          <Route path="movies" element={<Movies />}>
            <Route index element={<div>Movies index route</div>} />
            <Route path="movies/:movieId" element={<MovieDetails/>}/>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>}>
              <Route index element={<div>Reviews index route</div>} />
            </Route>
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};