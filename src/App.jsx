import { Routes, Route } from "react-router";
import { useAuthListener } from "./hooks/useAuthListener";
import { useSelector } from "react-redux";

import Landing from "./pages/Landing";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

import Dashboard from "./pages/Dashboard";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

const App = () => {
  useAuthListener();

  const { isAuthenticated } = useSelector((state) => state.auth);
  return <>{isAuthenticated ? <AppRoutes /> : <PublicRoutes />}</>;
};

export default App;
