import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './pages/Root';
import Home from './pages/Home';
import Aboutmyself from './pages/Aboutmyself';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { store } from './radex/store'
import { Provider } from 'react-redux'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="Aboutmyself" element={<Aboutmyself />} />
   
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <Provider store={store}>
         <RouterProvider router={router} />
   </Provider>
    

 
  </React.StrictMode>
);

