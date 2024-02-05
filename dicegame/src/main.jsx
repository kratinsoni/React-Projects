import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from '../components/Homepage/Homepage.jsx';
import Game from '..//components/Game/Game.jsx';
import Layout from '../Layout.jsx';
import styled from 'styled-components'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />}></Route>
      <Route path="game" element={<Game />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
