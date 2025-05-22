import React from "react";
import HomePage from "./homepage/Homepage";
import MoviePage from "./moviePage/MoviePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/moviePage",
    element: <MoviePage />,
  },
]);

const App = () => {
  return (
    <div className="overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
