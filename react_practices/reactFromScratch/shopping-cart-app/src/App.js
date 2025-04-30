import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Footer from "./componenets/Footer";
import Home from "./componenets/Home";
import AddRemoveCart from "./feature/cart/AddRemoveCart";
import ProductInfo from "./feature/product/ProductInfo";
import ProductsList from "./feature/product/ProductsList";
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">ReactShop 🛍️</h1>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Home
          </Link>
          <Link
            to="/product"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Product
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Cart
          </Link>
        </div>
      </nav>

      {/* Main content that grows to push footer down */}
      <main className="flex-grow px-4 sm:px-8 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductsList />} />
          <Route path="/cart" element={<AddRemoveCart />} />
          <Route path="/info/:id" element={<ProductInfo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
}

export default App;