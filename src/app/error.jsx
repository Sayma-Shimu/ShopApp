'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center px-4">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative text-center max-w-2xl mx-auto">
        {/* Error Icon Animation */}
        <div className="mb-8">
          <div className="text-8xl md:text-9xl animate-float">
            ⚠️
          </div>
          <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mt-4">
            Oops!
          </div>
        </div>

        {/* Error Message */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Something Went Wrong
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            We encountered an unexpected error. Our team has been notified and is working to fix this issue.
          </p>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-left">
              <h3 className="text-sm font-semibold text-red-800 mb-2">Error Details (Development Mode):</h3>
              <pre className="text-xs text-red-700 overflow-auto max-h-32">
                {error?.message || 'Unknown error occurred'}
              </pre>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Try Again</span>
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center space-x-2 bg-white text-gray-800 px-8 py-4 rounded-2xl font-bold text-lg border-2 border-gray-200 hover:border-orange-300 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Go Home</span>
            </Link>
          </div>

          {/* Help Text */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              If this problem persists, please{' '}
              <Link href="/contact" className="text-orange-600 hover:text-orange-800 font-semibold">
                contact our support team
              </Link>{' '}
              with the error details.
            </p>
          </div>
        </div>

        {/* Helpful Tips */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <div className="text-2xl mb-2">🔄</div>
            <div className="text-sm text-gray-600">
              <strong>Quick Fix:</strong> Try refreshing the page or clearing your browser cache
            </div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <div className="text-2xl mb-2">📞</div>
            <div className="text-sm text-gray-600">
              <strong>Need Help?</strong> Our support team is available 24/7 to assist you
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}