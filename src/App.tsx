import "./App.scss";
import MainLayout from "./components/MainLayout/MainLayout";
import { useAuth } from "./contexts/AuthContext";
import Page404 from "./pages/Page404/Page404";
import PageHome from "./pages/PageHome/PageHome";
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
        <Route
          path="/login"
          element={!user ? <PageLogin /> : <Navigate to="/home" replace />}
        />
        <Route
          path="/register"
          element={!user ? <PageRegister /> : <Navigate to="/home" replace />}
        />
        <Route
          path="/home"
          element={user ? <PageHome /> : <Navigate to="/login" replace />}
        />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
