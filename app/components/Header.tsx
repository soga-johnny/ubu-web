import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="relative w-40 h-8">
            <Image
              src="/logo-red.svg"
              alt="ubu book store"
              fill
              className="object-contain"
            />
          </Link>
          <button className="text-[#FB2321] p-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 