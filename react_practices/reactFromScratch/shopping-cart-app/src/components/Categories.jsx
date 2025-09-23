import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Package,
  Smartphone,
  Shirt,
  Home,
  Gamepad2,
  Car,
  Book,
  Music,
  Camera,
  Heart,
  Laptop
} from 'lucide-react'
import { clsx } from 'clsx'

const Categories = () => {
  const { data: products } = useSelector((state) => state.products)

  // Get unique categories with product counts
  const categories = useMemo(() => {
    const categoryMap = new Map()
    
    products.forEach(product => {
      const category = product.category
      if (categoryMap.has(category)) {
        categoryMap.set(category, categoryMap.get(category) + 1)
      } else {
        categoryMap.set(category, 1)
      }
    })

    // Convert to array and sort by count
    return Array.from(categoryMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
  }, [products])

  // Category icons mapping
  const categoryIcons = {
    electronics: Smartphone,
    "men's clothing": Shirt,
    "women's clothing": Shirt,
    jewelry: Heart,
    "men's fashion": Shirt,
    "women's fashion": Shirt,
    "home & garden": Home,
    sports: Gamepad2,
    automotive: Car,
    books: Book,
    music: Music,
    photography: Camera,
    computers: Laptop,
    default: Package
  }

  // Sample category data for better presentation
  const categoryData = [
    {
      name: 'Electronics',
      slug: 'electronics',
      description: 'Latest gadgets and electronic devices',
      productCount: categories.find(c => c.name.toLowerCase().includes('electronics'))?.count || 0,
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Clothing',
      slug: 'clothing',
      description: 'Fashion for men and women',
      productCount: categories.filter(c => c.name.toLowerCase().includes('clothing') || c.name.toLowerCase().includes('fashion')).reduce((sum, c) => sum + c.count, 0),
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
      color: 'from-pink-500 to-pink-600'
    },
    {
      name: 'Home & Garden',
      slug: 'home-garden',
      description: 'Everything for your home and garden',
      productCount: categories.find(c => c.name.toLowerCase().includes('home'))?.count || 0,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Sports',
      slug: 'sports',
      description: 'Sports equipment and accessories',
      productCount: categories.find(c => c.name.toLowerCase().includes('sports'))?.count || 0,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Jewelry',
      slug: 'jewelry',
      description: 'Beautiful jewelry and accessories',
      productCount: categories.find(c => c.name.toLowerCase().includes('jewelry'))?.count || 0,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Books',
      slug: 'books',
      description: 'Books for every interest',
      productCount: categories.find(c => c.name.toLowerCase().includes('books'))?.count || 0,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12 sm:py-16 lg:py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Shop by Category
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-secondary-600 mb-8">
              Discover our wide range of product categories and find exactly what you're looking for
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {categoryData.map((category, index) => {
              const IconComponent = categoryIcons[category.slug] || categoryIcons.default
              
              return (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <Link to={`/products?category=${category.slug}`}>
                    <div className="card overflow-hidden group-hover:shadow-xl transition-all duration-300 h-full">
                      {/* Category Image */}
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className={clsx(
                          'absolute inset-0 bg-gradient-to-t',
                          category.color,
                          'opacity-80'
                        )} />
                        
                        {/* Category Icon */}
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>

                        {/* Product Count */}
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-sm font-medium text-secondary-900">
                            {category.productCount} products
                          </span>
                        </div>
                      </div>

                      {/* Category Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-secondary-600 mb-4 text-sm sm:text-base">
                          {category.description}
                        </p>
                        
                        {/* View Category Button */}
                        <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                          <span className="text-sm sm:text-base">Shop Now</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Browse All Products CTA */}
      <section className="py-12 sm:py-16 bg-secondary-50">
        <div className="container px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-secondary-600 mb-8 text-sm sm:text-base">
              Browse our complete collection of products and discover something amazing
            </p>
            <Link
              to="/products"
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center space-x-2"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Categories
