import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { 
  ShoppingCart, 
  Heart, 
  Eye, 
  Star,
  Plus,
  Minus
} from 'lucide-react'
import { clsx } from 'clsx'
import { addToCart, removeFromCart, updateQuantity } from '../features/cart/cartSlice'

const ProductCard = ({ product, index }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const cartItem = cartItems.find(item => item.id === product.id)
  const isInCart = !!cartItem
  const quantity = cartItem?.quantity || 0

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }))
  }

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id))
  }

  const handleUpdateQuantity = (newQuantity) => {
    if (newQuantity <= 0) {
      dispatch(removeFromCart(product.id))
    } else {
      dispatch(updateQuantity({ id: product.id, quantity: newQuantity }))
    }
  }

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-lg sm:rounded-xl shadow-sm border border-secondary-200 overflow-hidden hover:shadow-lg transition-all duration-300 touch-action-manipulation"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Wishlist Button */}
      <button
        onClick={handleWishlistToggle}
        className={clsx(
          'absolute top-3 right-3 z-10 p-2 rounded-full transition-all duration-200',
          isWishlisted 
            ? 'bg-red-500 text-white' 
            : 'bg-white/80 text-secondary-600 hover:bg-red-500 hover:text-white'
        )}
      >
        <Heart className={clsx('w-4 h-4', isWishlisted && 'fill-current')} />
      </button>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary-50">
        <Link to={`/product/${product.id}`}>
          <motion.img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          />
        </Link>

        {/* Quick View Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
        >
          <Link
            to={`/product/${product.id}`}
            className="btn-primary p-3 rounded-full"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3 sm:p-4">
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={clsx(
                  'w-4 h-4',
                  i < Math.floor(product.rating?.rate || 4.5)
                    ? 'text-yellow-400 fill-current'
                    : 'text-secondary-300'
                )}
              />
            ))}
          </div>
          <span className="text-sm text-secondary-500 ml-2">
            ({product.rating?.count || 0})
          </span>
        </div>

        {/* Title */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-secondary-900 mb-2 line-clamp-2 hover:text-primary-600 transition-colors text-sm sm:text-base">
            {product.title}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg sm:text-xl font-bold text-secondary-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-secondary-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          {product.discount && (
            <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
              -{product.discount}%
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          {isInCart ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleUpdateQuantity(quantity - 1)}
                  className="p-1 rounded-full border border-secondary-300 hover:bg-secondary-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => handleUpdateQuantity(quantity + 1)}
                  className="p-1 rounded-full border border-secondary-300 hover:bg-secondary-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleRemoveFromCart}
                className="btn-outline text-sm px-3 py-1"
              >
                Remove
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary flex items-center justify-center space-x-2 py-2 text-sm sm:text-base"
            >
              <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Add to Cart</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard

