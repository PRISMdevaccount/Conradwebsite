"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <span className="text-xs font-bold tracking-wider text-purple-600 uppercase bg-purple-50 px-4 py-2 rounded-full">
                Conrad Challenge 2025
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              PRISM
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed">
              Pancreatic Mixed Reality Innovation for Surgical Management
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              AI-powered CT segmentation combined with mixed reality guidance to revolutionize 
              pancreatic surgery and improve patient outcomes.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition-all"
                >
                  Learn More
                </motion.button>
              </Link>
              <Link href="/support">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-purple-600 border-2 border-gray-200 font-semibold rounded-full hover:border-purple-600 hover:bg-purple-50 transition-all"
                >
                  Support Us
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Mixed Reality Headset Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl" />
              <div className="relative w-full h-full p-8">
                <Image
                  src="/PRISM_Mixed_Reality.png"
                  alt="PRISM Mixed Reality Headset"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}