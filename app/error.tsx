'use client';

import { useEffect } from 'react';
import { motion } from 'motion/react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Runtime error caught by Error Boundary:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#dbd5c9] text-[#191919] font-sans p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center"
      >
        <h2 className="text-2xl font-serif font-bold mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-8">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-[#f93700] text-white rounded-full font-medium hover:bg-[#d82f00] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f93700]/50"
        >
          Try again
        </button>
      </motion.div>
    </div>
  );
}
