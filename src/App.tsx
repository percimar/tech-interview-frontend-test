import "./App.scss";
import MainLayout from "./components/MainLayout/MainLayout";
import { useAuth } from "./contexts/AuthContext";
import Page404 from "./pages/Page404";
import PageHome from "./pages/PageHome";
import PageLogin from "./pages/PageLogin";
import PageRegister from "./pages/PageRegister";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={<Navigate to={user ? "/home" : "/login"} replace />}
        />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/register" element={<PageRegister />} />
        <Route path="/home" element={<PageHome />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
