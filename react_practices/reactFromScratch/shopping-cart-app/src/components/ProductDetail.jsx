import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { 
  ArrowLeft, 
  Star, 
  Heart, 
  ShoppingCart, 
  Plus, 
  Minus,
  Truck,
  Shield,
  RotateCcw
} from 'lucide-react'
import { clsx } from 'clsx'
import { addToCart } from '../features/cart/cartSlice'
import LoadingSpinner from './LoadingSpinner'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data: products, loading } = useSelector((state) => state.products)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const product = products.find(p => p.id === parseInt(id))

  if (loading) return <LoadingSpinner text="Loading product details..." />
  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold text-secondary-900 mb-4">Product Not Found</h1>
        <p className="text-secondary-600 mb-8">The product you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/products')}
          className="btn-primary"
        >
          Back to Products
        </button>
      </div>
    )
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }))
  }

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  const images = [product.image, product.image, product.image] // In a real app, you'd have multiple images

  return (
    <div className="container py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="btn-ghost mb-6 flex items-center space-x-2"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square bg-secondary-100 rounded-xl overflow-hidden">
            <img
              src={images[selectedImage]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={clsx(
                  'aspect-square rounded-lg overflow-hidden border-2 transition-all',
                  selectedImage === index
                    ? 'border-primary-500'
                    : 'border-secondary-200 hover:border-secondary-300'
                )}
              >
                <img
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Title and Rating */}
          <div>
            <h1 className="text-3xl font-bold text-secondary-900 mb-2">
              {product.title}
            </h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={clsx(
                      'w-5 h-5',
                      i < Math.floor(product.rating?.rate || 4.5)
                        ? 'text-yellow-400 fill-current'
                        : 'text-secondary-300'
                    )}
                  />
                ))}
              </div>
              <span className="text-secondary-600">
                ({product.rating?.count || 0} reviews)
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-primary-600">
                ${product.price}
              </span>
              <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded-full">
                {product.category}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">Description</h3>
            <p className="text-secondary-600 leading-relaxed">
              {product.description || 'This is a high-quality product that offers excellent value for money. Perfect for everyday use and designed to last.'}
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-secondary-50 rounded-lg">
              <Truck className="w-5 h-5 text-blue-500" />
              <div>
                <div className="font-medium text-secondary-900">Free Shipping</div>
                <div className="text-sm text-secondary-600">On orders over $100</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-secondary-50 rounded-lg">
              <Shield className="w-5 h-5 text-green-500" />
              <div>
                <div className="font-medium text-secondary-900">Secure Payment</div>
                <div className="text-sm text-secondary-600">100% protected</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-secondary-50 rounded-lg">
              <RotateCcw className="w-5 h-5 text-purple-500" />
              <div>
                <div className="font-medium text-secondary-900">Easy Returns</div>
                <div className="text-sm text-secondary-600">30-day policy</div>
              </div>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-lg font-medium text-secondary-900">Quantity:</span>
              <div className="flex items-center border border-secondary-300 rounded-lg">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="p-2 hover:bg-secondary-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="p-2 hover:bg-secondary-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 btn-primary py-3 flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={clsx(
                  'p-3 rounded-lg border-2 transition-colors',
                  isWishlisted
                    ? 'border-red-500 bg-red-50 text-red-600'
                    : 'border-secondary-300 text-secondary-600 hover:border-red-300 hover:text-red-600'
                )}
              >
                <Heart className={clsx('w-5 h-5', isWishlisted && 'fill-current')} />
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="border-t border-secondary-200 pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-secondary-600">
              <div>
                <span className="font-medium text-secondary-900">SKU:</span> {product.id}
              </div>
              <div>
                <span className="font-medium text-secondary-900">Category:</span> {product.category}
              </div>
              <div>
                <span className="font-medium text-secondary-900">Availability:</span> In Stock
              </div>
              <div>
                <span className="font-medium text-secondary-900">Shipping:</span> 2-3 business days
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail



