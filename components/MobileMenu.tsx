'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // ページ遷移時にメニューを閉じる
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="sm:hidden">
      {/* ハンバーガーボタン */}
      <button
        className="relative z-50 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="メニュー"
      >
        <div className="w-6 flex flex-col gap-1">
          <span 
            className={`block h-0.5 w-full bg-current transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span 
            className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`block h-0.5 w-full bg-current transition-transform duration-300 ${
              isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </div>
      </button>

      {/* オーバーレイメニュー */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="h-full flex flex-col items-center justify-center space-y-8 text-lg">
          <Link
            href="/"
            className="hover:text-gray-600 transition-colors"
          >
            ホーム
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-600 transition-colors"
          >
            店舗案内
          </Link>
          <Link
            href="/privacy"
            className="hover:text-gray-600 transition-colors"
          >
            プライバシーポリシー
          </Link>
        </nav>
      </div>
    </div>
  );
} 