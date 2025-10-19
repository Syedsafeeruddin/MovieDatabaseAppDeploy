import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App.jsx";
import Favorites from "./components/Favorites.jsx";
import Layout from "./Layout.jsx"; 
import { MovieProvider } from './context/movieContext.jsx'
import Toaster from 'react-hot-toast'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="favorites" element={<Favorites />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieProvider>
    <RouterProvider router={router} />
    <Toaster />
    </MovieProvider>
  </StrictMode>
);
