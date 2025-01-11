import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">BOOKSTORE</h3>
            <p className="text-sm text-gray-600">
              〒000-0000<br />
              東京都○○区○○町1-1-1
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-gray-600">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-gray-600">
                  店舗案内
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:text-gray-600">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">営業時間</h3>
            <p className="text-sm text-gray-600">
              平日: 10:00 - 21:00<br />
              土日祝: 10:00 - 20:00
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © 2024 BOOKSTORE. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 