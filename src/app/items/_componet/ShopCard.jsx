import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ShopCard = ({item}) => {
    return (
        <div className="group product-card relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
            <Link href={`/items/${item._id}`} className="block">
                {/* Image Container with Overlay */}
                <div className="relative h-72 overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                            {item.category}
                        </span>
                    </div>
                    
                    {/* Stock Badge */}
                    <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
                            item.stock > 50 ? 'bg-green-100 text-green-800' :
                            item.stock > 20 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                        }`}>
                            {item.stock} left
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                        {item.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {item.description}
                    </p>
                    
                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-blue-600">
                                ${item.price}
                            </span>
                            <span className="text-xs text-gray-500">
                                Best Price
                            </span>
                        </div>
                        
                        {/* View Details Button */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                            View Details
                        </div>
                    </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
        </div>
    )
}
