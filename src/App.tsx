import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { LangProvider } from "./contexts/LangContext";
import { NavProvider } from "./contexts/NavContext";
import Page404 from "./pages/Page404";
import PageHome from "./pages/PageHome";
import PageLogin from "./pages/PageLogin";
import PageRegister from "./pages/PageRegister";

function App() {
  return (
    <BrowserRouter>
      <LangProvider>
        <AuthProvider>
          <NavProvider>
            <Routes>
              <Route path="/" element={<PageLogin />} />
              <Route path="/register" element={<PageRegister />} />
              <Route path="/home" element={<PageHome />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </NavProvider>
        </AuthProvider>
      </LangProvider>
    </BrowserRouter>
  );
}

export default App;
