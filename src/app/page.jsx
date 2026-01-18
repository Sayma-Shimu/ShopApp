import Link from "next/link";

export default function Home() {
  return (
    <div>
        {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-up">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">ShopApp</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Discover amazing products at unbeatable prices. Your satisfaction is our priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link
              href="/items"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl inline-block hover-lift"
            >
              Shop Now →
            </Link>
            <Link
              href="#features"
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>


     {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Experience the best shopping with our premium services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
            <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover-lift">
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300 animate-float">🚚</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Get your orders delivered within 2-3 business days with real-time tracking</p>
            </div>
            <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover-lift">
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300 animate-float animation-delay-200">💳</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Secure Payment</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Your transactions are safe with bank-level encryption and security</p>
            </div>
            <div className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover-lift">
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300 animate-float animation-delay-400">🎁</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Quality Products</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Only the best products make it to our store with quality guarantee</p>
            </div>
          </div>
        </div>
      </section>


       {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-lg sm:text-xl text-gray-600">Find exactly what you&apos;re looking for</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: 'Electronics', icon: '💻', color: 'from-blue-500 to-cyan-500' },
              { name: 'Accessories', icon: '👜', color: 'from-purple-500 to-pink-500' },
              { name: 'Home', icon: '🏠', color: 'from-green-500 to-emerald-500' },
              { name: 'Sports', icon: '⚽', color: 'from-orange-500 to-red-500' }
            ].map((category) => (
              <Link
                key={category.name}
                href="/items"
                className={`group relative bg-gradient-to-br ${category.color} p-4 sm:p-6 md:p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden hover-lift animate-pulse-glow`}
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300 animate-float">{category.icon}</div>
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold text-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


       {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-2 text-gray-900">Your Trusted Shopping Partner</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                We are committed to providing you with the best shopping experience. Our curated selection
                of products ensures quality and value for money.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                With thousands of satisfied customers worldwide, we continue to grow and improve our services every day.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">10K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-1">99%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
              <Link
                href="/items"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Explore Products
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-400 to-purple-500 h-96 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-2 transition-transform duration-300">
                  <span className="text-9xl">🛍️</span>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">⭐</div>
                    <div>
                      <div className="font-bold text-gray-900">4.9/5</div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



     {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don&apos;t just take our word for it</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'John Doe', text: 'Great products and fast delivery! Highly recommend to everyone.', rating: 5, avatar: '👨' },
              { name: 'Jane Smith', text: 'Best online shopping experience ever. Quality products at great prices.', rating: 5, avatar: '👩' },
              { name: 'Mike Johnson', text: 'Customer service is outstanding. Will definitely shop here again!', rating: 5, avatar: '👨‍💼' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">&ldquo;{testimonial.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl sm:text-6xl mb-4 sm:mb-6 animate-float">📧</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-10 text-gray-100">Get the latest updates on new products, exclusive offers, and special discounts</p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 shadow-lg text-sm sm:text-base"
              />
              <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
                Subscribe
              </button>
            </div>
            <p className="text-xs sm:text-sm text-gray-200 mt-4">🔒 We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">We&apos;re here to help you 24/7</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-5xl mb-4">📧</div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Email Us</h3>
                <p className="text-gray-600 mb-2">info@shopapp.com</p>
                <p className="text-gray-600">support@shopapp.com</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Call Us</h3>
                <p className="text-gray-600 mb-2">(123) 456-7890</p>
                <p className="text-gray-600">Mon-Fri: 9AM - 6PM</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-center text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-3">Need Immediate Assistance?</h3>
              <p className="mb-6 text-gray-100">Our customer support team is always ready to help you</p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
