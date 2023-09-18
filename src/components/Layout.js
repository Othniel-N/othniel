import React from 'react';
import { Outlet } from 'react-router-dom';
import './footer-styles/index.css'
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default Layout