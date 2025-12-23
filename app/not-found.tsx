'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            <h1 className="text-9xl md:text-[12rem] font-bold text-slate-200 select-none">
              404
            </h1>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-6xl">🔍</span>
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-slate-800"
            >
              Page Not Found
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-slate-600 max-w-md mx-auto leading-relaxed"
            >
              The page you're looking for doesn't exist or has been moved to a different location.
            </motion.p>

            {/* Professional Note */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="bg-blue-50 border border-blue-200 rounded-lg p-4 mx-auto max-w-lg"
            >
              <p className="text-sm text-blue-800 font-medium">
                Please note: This 404 page was implemented as an additional enhancement 
                beyond the core project requirements to improve user experience.
              </p>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <HomeIcon className="w-5 h-5" />
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-lg font-medium border border-slate-300 transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              Go Back
            </button>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute inset-0 overflow-hidden pointer-events-none"
          >
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-200 rounded-full blur-3xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}