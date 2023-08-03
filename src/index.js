import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Project from './Pages/Project/Project';
import DiabetesRecommendationApp from './Pages/ProjectDetail/DiabetesRecommendationApp';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "project",
    element: <Project/>,
  },
  {
    path: "project/diabetesrecommendationapp",
    element: <DiabetesRecommendationApp/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
