
import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import * as React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './pages/Home.js';
import Movies from './pages/Movies.js';

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Home/>
      

  },
  {
    path: "/movies",
    element:
      <Movies/>
      

  },

]);


function App (){

  return  <RouterProvider router={router} />;
}

export default App;
