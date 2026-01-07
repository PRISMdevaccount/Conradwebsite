import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12">
              <Image 
                src="/logo.png" 
                alt="PRISM Logo" 
                width={48} 
                height={48}
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
              PRISM
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors text-sm"
            >
              About
            </Link>
            <Link 
              href="/team" 
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors text-sm"
            >
              Team
            </Link>
            <Link 
              href="/prism" 
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors text-sm"
            >
              Our Journey
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors text-sm"
            >
              Contact
            </Link>
            <Link href="/support">
              <button className="px-6 py-2.5 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-700 transition-colors">
                Support Us
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}