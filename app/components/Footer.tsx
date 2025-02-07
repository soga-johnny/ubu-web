import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#FF7A79] rounded-tr-[40px] text-white mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-8 mb-8">
            <Image
              src="/logo-white.svg"
              alt="ubu book store"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm font-montserrat">
            Copyright ubu book store
          </p>
        </div>
      </div>
    </footer>
  );
} 