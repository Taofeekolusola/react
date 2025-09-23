import React, { useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  SlidersHorizontal,
  SortAsc,
  SortDesc
} from 'lucide-react'
import { clsx } from 'clsx'
import { fetchProducts } from '../features/products/productsSlice'
import ProductCard from './ProductCard'
import LoadingSpinner from './LoadingSpinner'

const ProductsList = () => {
  const dispatch = useDispatch()
  const { data: products, loading, error } = useSelector((state) => state.products)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [sortOrder, setSortOrder] = useState('asc')
  const [viewMode, setViewMode] = useState('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 1000])

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(product => product.category))]
    return ['all', ...uniqueCategories]
  }, [products])

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description?.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      
      return matchesSearch && matchesCategory && matchesPrice
    })

    // Sort products
    filtered.sort((a, b) => {
      let aValue, bValue
      
      switch (sortBy) {
        case 'name':
          aValue = a.title.toLowerCase()
          bValue = b.title.toLowerCase()
          break
        case 'price':
          aValue = a.price
          bValue = b.price
          break
        case 'rating':
          aValue = a.rating?.rate || 0
          bValue = b.rating?.rate || 0
          break
        default:
          aValue = a.title.toLowerCase()
          bValue = b.title.toLowerCase()
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

    return filtered
  }, [products, searchTerm, selectedCategory, sortBy, sortOrder, priceRange])

  const handleSortChange = (newSortBy) => {
    if (sortBy === newSortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(newSortBy)
      setSortOrder('asc')
    }
  }

  if (loading) return <LoadingSpinner />
  if (error) return <div className="text-center text-red-500 py-8">Error: {error}</div>

  return (
    <div className="container py-6 sm:py-8 px-4">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-2">Products</h1>
        <p className="text-sm sm:text-base text-secondary-600">Discover our amazing collection of products</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg border border-secondary-200 p-4 sm:p-6 mb-6 sm:mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input pl-10 pr-4 w-full"
            />
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="input w-full sm:w-40"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>

            {/* Sort */}
            <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto">
              <button
                onClick={() => handleSortChange('name')}
                className={clsx(
                  'btn-ghost text-xs sm:text-sm whitespace-nowrap',
                  sortBy === 'name' && 'bg-primary-50 text-primary-600'
                )}
              >
                Name {sortBy === 'name' && (sortOrder === 'asc' ? <SortAsc className="w-3 h-3 sm:w-4 sm:h-4 inline ml-1" /> : <SortDesc className="w-3 h-3 sm:w-4 sm:h-4 inline ml-1" />)}
              </button>
              <button
                onClick={() => handleSortChange('price')}
                className={clsx(
                  'btn-ghost text-xs sm:text-sm whitespace-nowrap',
                  sortBy === 'price' && 'bg-primary-50 text-primary-600'
                )}
              >
                Price {sortBy === 'price' && (sortOrder === 'asc' ? <SortAsc className="w-3 h-3 sm:w-4 sm:h-4 inline ml-1" /> : <SortDesc className="w-3 h-3 sm:w-4 sm:h-4 inline ml-1" />)}
              </button>
            </div>

            {/* View Mode */}
            <div className="flex items-center border border-secondary-300 rounded-md">
              <button
                onClick={() => setViewMode('grid')}
                className={clsx(
                  'p-1.5 sm:p-2 transition-colors',
                  viewMode === 'grid' ? 'bg-primary-500 text-white' : 'text-secondary-600 hover:bg-secondary-50'
                )}
              >
                <Grid className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={clsx(
                  'p-1.5 sm:p-2 transition-colors',
                  viewMode === 'list' ? 'bg-primary-500 text-white' : 'text-secondary-600 hover:bg-secondary-50'
                )}
              >
                <List className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* Advanced Filters */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-outline flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm"
            >
              <SlidersHorizontal className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Advanced Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 pt-6 border-t border-secondary-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Minimum Rating
                  </label>
                  <select className="input w-full">
                    <option value="0">Any Rating</option>
                    <option value="1">1+ Stars</option>
                    <option value="2">2+ Stars</option>
                    <option value="3">3+ Stars</option>
                    <option value="4">4+ Stars</option>
                    <option value="5">5 Stars</option>
                  </select>
                </div>

                {/* Clear Filters */}
                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setSearchTerm('')
                      setSelectedCategory('all')
                      setPriceRange([0, 1000])
                      setSortBy('name')
                      setSortOrder('asc')
                    }}
                    className="btn-secondary w-full"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-secondary-600">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>

      {/* Products Grid/List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={viewMode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={clsx(
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'
              : 'space-y-4'
          )}
        >
          {filteredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
              viewMode={viewMode}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-secondary-400" />
          </div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-2">No products found</h3>
          <p className="text-secondary-600 mb-4">Try adjusting your search or filter criteria</p>
          <button
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('all')
              setPriceRange([0, 1000])
            }}
            className="btn-primary"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductsList

