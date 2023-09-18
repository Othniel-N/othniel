import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './components/footer-styles/index.css'
import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='about' element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
