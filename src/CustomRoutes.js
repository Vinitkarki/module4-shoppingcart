import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart"
import NotFound from './components/NotFound/NotFound';

const CustomRoutes = ({data}) => {
  return <Routes>
    <Route path="/cart" element={<Cart />} />
    <Route path="/" element={<Home data={data} />} />
    <Route path="/home" element={<Home data={data} />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
}

export default CustomRoutes
