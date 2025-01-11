import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="font-bold text-xl transition-transform hover:scale-105 duration-300"
          >
            BOOKSTORE
          </Link>
          
          <nav className="hidden sm:flex space-x-8">
            <Link 
              href="/" 
              className="hover:text-gray-600 transition-colors relative group"
            >
              ホーム
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <Link 
              href="/about" 
              className="hover:text-gray-600 transition-colors relative group"
            >
              店舗案内
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <Link 
              href="/privacy" 
              className="hover:text-gray-600 transition-colors relative group"
            >
              プライバシーポリシー
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
} 