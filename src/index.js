import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import RootLayout, { sidebarLoader } from './components/RootLayout';
import Dashboard from './pages/Dashboard';
import Setup from './pages/Setup';
import StorePage from './pages/StorePage';
import StoresPage from './pages/StoresPage';
import NewStore from './pages/NewStore';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} loader={sidebarLoader}>
      <Route index element={<Dashboard/>} />
      <Route path="/setup" element={<Setup/>} />
      <Route path="/stores">
        <Route index element={<StoresPage/>} />
        <Route path=":id" element={<StorePage/>} />
        <Route path="new" element={<NewStore/>} />
      </Route>
    </Route>
  )

);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

