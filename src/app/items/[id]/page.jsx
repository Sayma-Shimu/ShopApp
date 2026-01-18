import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";

export default async function ItemDetailPage({ params }) {
  const { id } = await params;
  
  let item = null;
  
  try {
    // Check if ID is valid ObjectId format
    if (!ObjectId.isValid(id)) {
      console.error('Invalid ObjectId format:', id);
      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
          <div className="text-center bg-white p-12 rounded-2xl shadow-xl">
            <div className="text-6xl mb-4">😕</div>
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Invalid Product ID</h1>
            <p className="text-gray-600 mb-6">The product ID format is not valid.</p>
            <Link 
              href="/items" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Back to Products
            </Link>
          </div>
        </div>
      );
    }

    const db = await dbConnect();
    const result = await db.collection('items').findOne({
      _id: new ObjectId(id)
    });
    
    if (result) {
      item = {
        ...result,
        _id: result._id.toString(),
      };
    }
  } catch (error) {
    console.error('Error fetching item:', error);
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center bg-white p-12 rounded-2xl shadow-xl">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link 
            href="/items" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Breadcrumb Section */}
      <section className="bg-white/80 backdrop-blur-sm py-4 shadow-sm border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/items" className="text-blue-600 hover:text-blue-800 transition-colors">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 font-medium">{item.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Stock Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                    item.stock > 50 ? 'bg-green-100 text-green-800' :
                    item.stock > 20 ? 'bg-yellow-100 text-yellow-800' :
                    item.stock > 0 ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {item.stock > 0 ? `${item.stock} in stock` : 'Out of stock'}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Details Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Category Badge */}
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {item.category}
                </span>
              </div>

              {/* Product Title */}
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                {item.name}
              </h1>
              
              {/* Price Section */}
              <div className="mb-8">
                <div className="flex items-baseline space-x-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ${item.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ${Math.round(item.price * 1.3)}
                  </span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round(((item.price * 1.3 - item.price) / (item.price * 1.3)) * 100)}% OFF
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">✨ Best price guaranteed</p>
              </div>
              
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Product Description</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{item.description}</p>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-4 mb-8">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold text-lg flex items-center justify-center space-x-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
                  </svg>
                  <span>Add to Cart</span>
                </button>
                
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-gray-100 text-gray-800 py-3 rounded-2xl hover:bg-gray-200 transition-all duration-300 font-semibold flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>Wishlist</span>
                  </button>
                  <button className="bg-gray-100 text-gray-800 py-3 rounded-2xl hover:bg-gray-200 transition-all duration-300 font-semibold flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Product Specifications */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Product Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Product ID:</span>
                    <span className="font-semibold text-gray-900">#{item._id.slice(-8).toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-semibold text-gray-900">{item.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Availability:</span>
                    <span className={`font-semibold ${item.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {item.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-semibold text-green-600">Free Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600">Experience premium shopping with guaranteed satisfaction</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "✓",
                title: "Quality Assured",
                description: "100% authentic products with quality guarantee",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: "🚚",
                title: "Fast Shipping",
                description: "Free delivery within 2-3 business days",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "↩️",
                title: "Easy Returns",
                description: "Hassle-free 30-day return policy",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "💳",
                title: "Secure Payment",
                description: "Bank-level security for all transactions",
                color: "from-orange-500 to-red-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group text-center">
                <div className={`bg-gradient-to-br ${feature.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <span className="text-3xl text-white">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Products */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Explore More Products</h3>
          <p className="text-blue-100 mb-6">Discover our complete collection of premium products</p>
          <Link 
            href="/items" 
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>Back to All Products</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
