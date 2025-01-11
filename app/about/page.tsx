import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* 店舗紹介 */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold mb-8 text-center">店舗案内</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3]">
            <Image
              src="/store-front.jpg" // 後で適切な画像を追加
              alt="店舗外観"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">BOOKSTOREについて</h2>
            <p className="text-gray-600 mb-6">
              2010年の創業以来、私たちは本を通じて地域の文化発信拠点となることを目指してきました。
              古書から新刊まで、幅広い書籍を取り揃え、くつろぎの読書空間を提供しています。
            </p>
            <dl className="space-y-4">
              <div>
                <dt className="font-bold">所在地</dt>
                <dd className="text-gray-600">〒000-0000 東京都○○区○○町1-1-1</dd>
              </div>
              <div>
                <dt className="font-bold">営業時間</dt>
                <dd className="text-gray-600">
                  平日: 10:00 - 21:00<br />
                  土日祝: 10:00 - 20:00
                </dd>
              </div>
              <div>
                <dt className="font-bold">アクセス</dt>
                <dd className="text-gray-600">○○線 ○○駅 徒歩5分</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* フロアガイド */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">フロアガイド</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">1F</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>新刊書籍</li>
              <li>文庫・新書</li>
              <li>雑誌</li>
              <li>カフェスペース</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">2F</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>専門書</li>
              <li>実用書</li>
              <li>児童書</li>
              <li>閲覧スペース</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">3F</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>古書</li>
              <li>貴重書</li>
              <li>ギャラリー</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
} 