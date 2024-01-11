import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const About = lazy(() => import('./Pages/About/About')) 
const Project = lazy(() => import('./Pages/Project/Project')) 
const Contact = lazy(() => import('./Pages/Contact/Contact'))
const FoodCare = lazy(() => import('./Pages/ProjectDetail/FoodCare'))
const DailyReader = lazy(() => import('./Pages/ProjectDetail/DailyReader'))
const CloneProjects = lazy(() => import('./Pages/ProjectDetail/CloneProjects'))

const routes = [
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "contact",
    element: <React.Suspense fallback={<div>Loading...</div>}><Contact/></React.Suspense>,
  },
  {
    path: "about",
    element: <React.Suspense fallback={<div>Loading...</div>}><About/></React.Suspense>,
  },
  {
    path: "projects",
    element: <React.Suspense fallback={<div>Loading...</div>}><Project/></React.Suspense>,
  },
  {
    path: "projects/foodcare",
    element: <React.Suspense fallback={<div>Loading...</div>}><FoodCare /></React.Suspense>,
  },
  {
    path: "projects/dailyreader",
    element: <React.Suspense fallback={<div>Loading</div>}><DailyReader/></React.Suspense>,
  },
  {
    path: "projects/cloneprojects",
    element: <React.Suspense fallback={<div>Loading</div>}><CloneProjects/></React.Suspense>,
  },
]

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
