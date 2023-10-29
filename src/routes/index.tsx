import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Header from '../layouts/Header';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';
import HomeContent from '../pages/Home/HomeContent';
import Post from '../pages/Post';
import ShoppingCart from '../pages/ShopCart';
import ProductList from '../pages/Products/ProductList';

const AppRouter: React.FC = () => {
 return (
   <>
   <Header/>
   <NavBar/>
   <Routes>
      <Route index={true} element={<HomeContent/>}/>
      <Route path="/product/:id" element={<Post/>}/>
      <Route path="/category/:category" element={<ProductList/>}/>
      <Route path="/cart" element={<ShoppingCart/>}/>
   </Routes>
   <Footer/>
   </>
   
 );
}

export default AppRouter;