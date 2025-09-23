import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Star, 
  Truck, 
  Shield, 
  CreditCard,
  Headphones,
  Zap,
  Award
} from 'lucide-react'
import { clsx } from 'clsx'

const Home = () => {
  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free shipping on orders over $100',
      color: 'text-blue-500'
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: 'Your payment information is safe and secure',
      color: 'text-green-500'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support',
      color: 'text-purple-500'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee on all products',
      color: 'text-yellow-500'
    }
  ]

  const categories = [
    { name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400', count: 120 },
    { name: 'Clothing', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400', count: 85 },
    { name: 'Home & Garden', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400', count: 95 },
    { name: 'Sports', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400', count: 67 }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight"
                >
                  Discover Amazing
                  <span className="text-primary-600 block">Products</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base sm:text-lg lg:text-xl text-secondary-600 max-w-lg"
                >
                  Shop the latest trends with unbeatable prices and exceptional quality. 
                  Your one-stop destination for everything you need.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Link
                  to="/products"
                  className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center space-x-2"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/categories"
                  className="btn-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                >
                  Browse Categories
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-secondary-200"
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary-600">10K+</div>
                  <div className="text-xs sm:text-sm text-secondary-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary-600">500+</div>
                  <div className="text-xs sm:text-sm text-secondary-600">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary-600">4.9</div>
                  <div className="text-xs sm:text-sm text-secondary-600">Rating</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="bg-secondary-100 rounded-lg p-4">
                        <div className="w-full h-32 bg-secondary-200 rounded"></div>
                        <div className="mt-2 space-y-2">
                          <div className="h-3 bg-secondary-200 rounded w-3/4"></div>
                          <div className="h-3 bg-secondary-200 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="bg-secondary-100 rounded-lg p-4">
                        <div className="w-full h-24 bg-secondary-200 rounded"></div>
                        <div className="mt-2 h-3 bg-secondary-200 rounded w-2/3"></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-secondary-100 rounded-lg p-4">
                        <div className="w-full h-24 bg-secondary-200 rounded"></div>
                        <div className="mt-2 h-3 bg-secondary-200 rounded w-2/3"></div>
                      </div>
                      <div className="bg-secondary-100 rounded-lg p-4">
                        <div className="w-full h-32 bg-secondary-200 rounded"></div>
                        <div className="mt-2 space-y-2">
                          <div className="h-3 bg-secondary-200 rounded w-3/4"></div>
                          <div className="h-3 bg-secondary-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Why Choose Us?</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              We're committed to providing you with the best shopping experience possible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={clsx(
                  'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300',
                  feature.color.replace('text-', 'bg-').replace('-500', '-100')
                )}>
                  <feature.icon className={clsx('w-8 h-8', feature.color)} />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Shop by Category</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Explore our wide range of product categories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <Link
                  to={`/products?category=${category.name.toLowerCase()}`}
                  className="block"
                >
                  <div className="card overflow-hidden group-hover:shadow-lg transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                        {category.name}
                      </h3>
                      <p className="text-secondary-600 text-sm">
                        {category.count} products
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Shopping?
            </h2>
            <p className="text-primary-100 mb-8 text-lg">
              Join thousands of satisfied customers and discover amazing products at unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="btn bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4"
              >
                Browse Products
              </Link>
              <Link
                to="/contact"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

