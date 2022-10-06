import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Page404 from './pages/Page404';
import PageHome from './pages/PageHome';
import PageLogin from './pages/PageLogin';
import PageRegister from './pages/PageRegister';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageLogin />} />
      <Route path="/register" element={<PageRegister />} />
      <Route path="/home" element={<PageHome />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
