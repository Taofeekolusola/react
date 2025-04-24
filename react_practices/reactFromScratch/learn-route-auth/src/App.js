import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    
      <BrowserRouter>
        <nav>
          <Link to='/'>Home</Link> | {""}
          <Link to='about'>About</Link> | {""}
          <Link to='profile'>Profile</Link>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile/:username" element={ <Profile/> } />
        </Routes>

      </BrowserRouter>
  );
}

export default App;
