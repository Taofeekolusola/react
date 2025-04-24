import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-blue-700">User Manager</h2>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/details" className="text-gray-700 hover:text-blue-600 font-medium">
            Details
          </Link>
        </div>
      </nav>

      {/* Page Header */}
      <header className="text-center mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Welcome to the User Manager App
        </h1>
        <p className="text-gray-600 text-lg">
          View, Add and Explore User Details
        </p>
      </header>

      {/* Routes */}
      <main className="mt-10 px-4 md:px-8">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/details" element={<UserDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;