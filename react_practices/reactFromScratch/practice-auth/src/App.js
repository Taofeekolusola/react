import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAunthenticated] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isAuthenticated')
    if (loggedIn === 'true') {
      setIsAunthenticated(true)
    }
  }, [])

  const login = () => {
    setIsAunthenticated(true)
    localStorage.setItem('isAuthenticated', 'true')
  };
  const logout = () => {
    setIsAunthenticated(false)
    localStorage.setItem('isAunthenticated', 'false')
  }
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link> | {""}
        <Link to='/dashboard'>Dashboard</Link> | {""}
        <Link to='/login'>Login</Link>
      </nav>
      <Routes>
        <Route path='/' element={<h2>🏠 Home</h2>} />
        <Route path='/login' element={<Login login={login} />} />
        <Route
          path='/dashboard/'
          element={<ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard logout={ logout } />
          </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;