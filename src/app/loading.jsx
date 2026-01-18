export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative text-center">
        {/* Loading Spinner */}
        <div className="mb-8">
          <div className="relative">
            {/* Outer Ring */}
            <div className="w-24 h-24 border-4 border-blue-200 rounded-full animate-spin"></div>
            {/* Inner Ring */}
            <div className="absolute top-2 left-2 w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            {/* Center Dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Loading...
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Please wait while we prepare your content
          </p>

          {/* Loading Dots Animation */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>

        {/* Fun Loading Messages */}
        <div className="mt-6 text-sm text-gray-500">
          <div className="animate-pulse">
            ✨ Crafting the perfect experience for you...
          </div>
        </div>
      </div>
    </div>
  );
}