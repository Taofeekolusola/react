import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-secondary-50 flex items-center justify-center">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-8xl lg:text-9xl font-bold text-primary-600 mb-4">
              404
            </div>
            <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/"
              className="btn-primary flex items-center justify-center space-x-2 py-3 px-6"
            >
              <Home className="w-4 h-4" />
              <span>Go Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-outline flex items-center justify-center space-x-2 py-3 px-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Search Suggestion */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-secondary-200">
            <div className="flex items-center space-x-2 mb-4">
              <Search className="w-5 h-5 text-primary-600" />
              <h3 className="text-lg font-semibold text-secondary-900">
                Looking for something specific?
              </h3>
            </div>
            <p className="text-secondary-600 mb-4">
              Try searching for products or browse our categories to find what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/products"
                className="btn-secondary flex-1 text-center py-2"
              >
                Browse Products
              </Link>
              <Link
                to="/contact"
                className="btn-ghost flex-1 text-center py-2"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound



