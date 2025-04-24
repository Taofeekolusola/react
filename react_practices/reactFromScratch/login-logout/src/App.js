import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>🏠 Home</h2>} />
        <Route path="/login" element={<Login login={login} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard logout={logout} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;