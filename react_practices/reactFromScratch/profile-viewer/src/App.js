import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | {""}
        <Link to="about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile/:username" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
