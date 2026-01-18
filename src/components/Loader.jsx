export default function Loader({ 
  size = "medium", 
  text = "Loading...", 
  fullScreen = false,
  color = "blue" 
}) {
  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-12 h-12", 
    large: "w-20 h-20"
  };

  const colorClasses = {
    blue: {
      primary: "border-blue-500",
      secondary: "border-blue-200",
      gradient: "from-blue-600 to-purple-600",
      dots: ["bg-blue-500", "bg-purple-500", "bg-pink-500"]
    },
    green: {
      primary: "border-green-500",
      secondary: "border-green-200", 
      gradient: "from-green-600 to-emerald-600",
      dots: ["bg-green-500", "bg-emerald-500", "bg-teal-500"]
    },
    red: {
      primary: "border-red-500",
      secondary: "border-red-200",
      gradient: "from-red-600 to-orange-600", 
      dots: ["bg-red-500", "bg-orange-500", "bg-yellow-500"]
    }
  };

  const currentColor = colorClasses[color] || colorClasses.blue;

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="text-center">
          <LoaderSpinner size={size} color={currentColor} />
          <p className="mt-4 text-lg text-gray-600 font-medium">{text}</p>
          <LoadingDots color={currentColor} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <LoaderSpinner size={size} color={currentColor} />
      <p className="mt-4 text-gray-600 font-medium">{text}</p>
      <LoadingDots color={currentColor} />
    </div>
  );
}

// Spinner Component
function LoaderSpinner({ size, color }) {
  const sizeClass = {
    small: "w-6 h-6",
    medium: "w-12 h-12",
    large: "w-20 h-20"
  }[size];

  return (
    <div className="relative">
      {/* Outer Ring */}
      <div className={`${sizeClass} border-4 ${color.secondary} rounded-full animate-spin`}></div>
      {/* Inner Ring */}
      <div className={`absolute top-1 left-1 ${size === 'small' ? 'w-4 h-4' : size === 'medium' ? 'w-10 h-10' : 'w-16 h-16'} border-4 ${color.primary} border-t-transparent rounded-full animate-spin`} style={{animationDirection: 'reverse'}}></div>
      {/* Center Dot */}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${size === 'small' ? 'w-2 h-2' : size === 'medium' ? 'w-4 h-4' : 'w-6 h-6'} bg-gradient-to-r ${color.gradient} rounded-full animate-pulse`}></div>
    </div>
  );
}

// Loading Dots Component
function LoadingDots({ color }) {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      <div className={`w-2 h-2 ${color.dots[0]} rounded-full animate-bounce`}></div>
      <div className={`w-2 h-2 ${color.dots[1]} rounded-full animate-bounce animation-delay-200`}></div>
      <div className={`w-2 h-2 ${color.dots[2]} rounded-full animate-bounce animation-delay-400`}></div>
    </div>
  );
}

// Simple Inline Loader (for buttons, etc.)
export function InlineLoader({ size = "small", color = "white" }) {
  const sizeClass = {
    small: "w-4 h-4",
    medium: "w-6 h-6"
  }[size];

  const colorClass = color === "white" ? "border-white" : "border-blue-500";

  return (
    <div className={`${sizeClass} border-2 ${colorClass} border-t-transparent rounded-full animate-spin`}></div>
  );
}

// Skeleton Loader for Cards
export function SkeletonLoader({ count = 1 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
          {/* Image Skeleton */}
          <div className="h-72 bg-gray-200"></div>
          
          {/* Content Skeleton */}
          <div className="p-6">
            {/* Title */}
            <div className="h-6 bg-gray-200 rounded mb-3"></div>
            
            {/* Description */}
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            
            {/* Price and Button */}
            <div className="flex justify-between items-center">
              <div className="h-8 bg-gray-200 rounded w-20"></div>
              <div className="h-10 bg-gray-200 rounded w-24"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Page Loader (for full page loading)
export function PageLoader({ text = "Loading page..." }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative text-center">
        <Loader size="large" text={text} color="blue" />
        
        {/* Progress Bar */}
        <div className="mt-8 w-64 bg-gray-200 rounded-full h-2 mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
        </div>
        
        <p className="mt-4 text-sm text-gray-500 animate-pulse">
          ✨ Preparing your experience...
        </p>
      </div>
    </div>
  );
}