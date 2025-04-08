import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 페이지 컴포넌트
import MainPage from "@pages/index";
import AboutPage from "@pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<MainPage />}></Route>
        <Route index path="/about" element={<AboutPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
