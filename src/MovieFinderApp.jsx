import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import {
  CategoryMovie,
  CategorySerie,
  Home,
  MoviePage,
  Person,
  PopularMovies,
  PopularSeries,
  Search,
  SeriePage,
  TopRatedMovies,
  TopRatedSeries,
  UpcomingMovies,
  UpcomingSeries,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/popular-movies',
    element: <PopularMovies />,
  },
  {
    path: '/popular-series',
    element: <PopularSeries />,
  },
  {
    path: '/upcoming-movies',
    element: <UpcomingMovies />,
  },
  {
    path: '/on-the-air-series',
    element: <UpcomingSeries />,
  },
  {
    path: '/search/:data',
    element: <Search />,
  },
  {
    path: '/top-rated-series',
    element: <TopRatedSeries />,
  },
  {
    path: '/top-rated-movies',
    element: <TopRatedMovies />,
  },
  {
    path: '/movie/:movieTitle/:movieId',
    element: <MoviePage />,
  },
  {
    path: '/serie/:serieTitle/:serieId',
    element: <SeriePage />,
  },
  {
    path: '/person/:idPerson/:namePerson',
    element: <Person />,
  },
  {
    path: '/movie/category/:categoryName/:idCategory',
    element: <CategoryMovie />,
  },
  {
    path: '/serie/category/:categoryName/:idCategory',
    element: <CategorySerie />,
  },
  {
    path: '/*',
    element: <Navigate to={'/'} />,
  },
]);

export const MovieFinderApp = () => {
  return (
    <>
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:source" content="https://github.com/offensive-vk/Temp/" />
        <meta property="og:site_name" content="TheExitMoviePlatform by Vedansh (offensive-vk)" />
        <meta property="og:title" content="TheExitMoviePlatform - Find Everything, Anywhere, Anytime." />
        <meta property="og:url" content="https://find-everything.pages.dev/" />
        <meta property="og:dev" content="https://find-everything.pages.dev/" />
        <meta property="og:image" content="/logo/logo-color.png"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta charset="UTF-8" />
        <meta http-equiv="content-language" content="en" />
        <meta name="robots" content="index" data-robots="true"/>
        <meta name="description" content="Discover popular movies and series with Movie Finder!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="TEMP - One Platform to Find Whatever You Need About Movies and Series." />
        <title>TheExitMoviePlatform - Find Everything, Anywhere, Anytime.</title>
        <link rel="canonical" href="https://find-everything.pages.dev/" />
        <link rel="shortcut icon" type="image/svg+xml" href="/icons/svg/logo-color.svg" />
        <link rel="icon" type="image/svg+xml" href="/icons/svg/logo-no-background.svg" />
        <meta name="keywords" content="temp, theexitmovieplatform, movie-finder, show-finder, movies, series, movie, series, search, find, discover, popular, upcoming, top-rated, on-the-air, genre, category, actor, actress, cast, crew, production, release, budget, revenue, rating, runtime, tagline, vote-count, seasons, episodes, last-air-date, production-companies, director, recommendations, watch-trailer, streaming, results, results-for, media-type, origin-country, cast, spoken-languages, status, release-date, budget, revenue, popularity, runtime, tagline, vote-count, seasons, episodes, last-air-date, production-companies, crew, recommendations, watch-trailer, streaming, results, results-for, media-type, origin-country, cast, spoken-languages, status, release-date, budget, revenue, popularity, runtime, tagline, vote-count, seasons, episodes, last-air-date, production-companies, crew, recommendations, watch-trailer, streaming" />
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
};
