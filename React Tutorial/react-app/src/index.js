import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './App';
import Expenses from './Expenses';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FuncComponent from './components/FuncComponent';
import ClassComponent from './components/ClassComponent';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Application />
    ),
  },
  {
    path: "expenses",
    element: (
      <Expenses />
    ),
  },
  {
    path: "fcomponent",
    element: (
      <FuncComponent />
    ),
  },
  {
    path: "ccomponent",
    element: (
      <ClassComponent />
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

