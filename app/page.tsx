import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="relative h-[70vh] min-h-[600px] animate-fade-in">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/hero-image.jpg"
          alt="書店の内観"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center justify-center text-white">
          <div className="text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              あなたの物語が始まる場所
            </h1>
            <p className="text-lg md:text-xl">
              BOOKSTOREで新しい本との出会いを
            </p>
          </div>
        </div>
      </section>

      {/* おすすめ書籍セクション */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in-delay">
        <h2 className="text-3xl font-bold mb-8 text-center">今月のおすすめ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 書籍カードを後で追加 */}
        </div>
      </section>

      {/* お知らせセクション */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 animate-fade-in-delay-2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">お知らせ</h2>
          <div className="space-y-4">
            {/* お知らせリストを後で追加 */}
          </div>
        </div>
      </section>
    </>
  );
}
