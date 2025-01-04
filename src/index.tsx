import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import AppRoutes from './Fuescart/Routing_Main/Routes'; // Your routes file

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>  {/* Wrap the routes in BrowserRouter */}
    <AppRoutes />
  </BrowserRouter>
);
