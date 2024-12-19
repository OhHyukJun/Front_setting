import React from 'react';
import './App.css';
import {
  RecoilRoot
} from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './Layouts/Header';
import { Footer } from './Layouts/Footer';
import { MainPage } from './Pages/Main/Main';
const App  = () => {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
      <Footer />
    </>
  );
};

export default App;
