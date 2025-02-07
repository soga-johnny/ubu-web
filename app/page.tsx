import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import MorphLine from "./components/MorphLine";

export default function Home() {
  return (
    <>
      <Header />
      <MorphLine />
      <main>
        {/* ヒーローセクション */}
        <section className="relative h-screen">
          <div className="absolute inset-0 z-10" />
          <div className="relative z-20 h-full container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-full flex flex-col justify-center max-w-2xl">
              <h1 className="text-2xl md:text-3xl mb-4">
                ウブなトキメキを思い出して
              </h1>
              <p className="text-lg md:text-xl">
                日本からカルチャーを産む本屋
              </p>
              
              {/* 装飾的な線 */}
              {/* 装飾的な線のdivは削除 */}
              
              {/* スクロールインジケーター */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <span className="text-sm font-montserrat mb-2">Scroll</span>
                <div className="h-16 w-px bg-current animate-scroll-indicator" />
              </div>
            </div>
          </div>
        </section>

        {/* Aboutセクション */}
        <section className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* 縦線の装飾 */}
              <div className="absolute left-0 top-0 w-px h-16 bg-current" />
              
              <div className="space-y-8">
                <p className="text-lg leading-relaxed pl-8">
                  UBU書店では、貴方のときめきにつながるかもしれない一冊 そして、貴方自身が自分と向き合う際に寄り添ってくれるかもしれない一冊、最後に、これからの日本を生き抜くためにヒントになるであろう一冊をメインに選書していきます。
                </p>
                <p className="text-lg leading-relaxed pl-8">
                  貴方が貴方らしく前進していく過程で<br />
                  ほんの少しでもお役に立てたら幸いです。
                </p>
                
                <div className="text-right">
                  <Link 
                    href="/about" 
                    className="inline-flex items-center text-sm font-montserrat hover:opacity-70 transition-opacity"
                  >
                    <span className="mr-2">More</span>
                    <span className="w-4 h-px bg-current" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

                {/* トキメキの本棚セクション */}
                <section className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
            <div className="relative w-full h-[300px] pl-8">
                  <Image
                    src="/sample-image.jpg"
                    alt="トキメキの本棚"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              {/* 縦線の装飾 */}
              <div className="absolute left-0 top-0 w-px h-16 bg-current" />
              
              <div className="space-y-8 pt-12">
                <h2 className="text-lg leading-relaxed">
                  トキメキの本棚
                </h2>
                <p className="text-lg leading-relaxed">
                サンプル文言サンプル文言サンプル文言サンプル文言<br />
                  サンプル文言サンプル文言サンプル文言サンプル文言
                </p>
                
                <div className="text-right">
                  <Link 
                    href="/about" 
                    className="inline-flex items-center text-sm font-montserrat hover:opacity-70 transition-opacity"
                  >
                    <span className="mr-2">More</span>
                    <span className="w-4 h-px bg-current" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
            <div className="relative w-full h-[300px] pl-8">
                  <Image
                    src="/sample-image.jpg"
                    alt="トキメキの本棚"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              {/* 縦線の装飾 */}
              <div className="absolute left-0 top-0 w-px h-16 bg-current" />
              
              <div className="space-y-8 pt-12">
                <h2 className="text-lg leading-relaxed">
                  トキメキの本棚
                </h2>
                <p className="text-lg leading-relaxed">
                サンプル文言サンプル文言サンプル文言サンプル文言<br />
                  サンプル文言サンプル文言サンプル文言サンプル文言
                </p>
                
                <div className="text-right">
                  <Link 
                    href="/about" 
                    className="inline-flex items-center text-sm font-montserrat hover:opacity-70 transition-opacity"
                  >
                    <span className="mr-2">More</span>
                    <span className="w-4 h-px bg-current" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
            <div className="relative w-full h-[300px] pl-8">
                  <Image
                    src="/sample-image.jpg"
                    alt="トキメキの本棚"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              {/* 縦線の装飾 */}
              <div className="absolute left-0 top-0 w-px h-16 bg-current" />
              
              <div className="space-y-8 pt-12">
                <h2 className="text-lg leading-relaxed">
                  トキメキの本棚
                </h2>
                <p className="text-lg leading-relaxed">
                サンプル文言サンプル文言サンプル文言サンプル文言<br />
                  サンプル文言サンプル文言サンプル文言サンプル文言
                </p>
                
                <div className="text-right">
                  <Link 
                    href="/about" 
                    className="inline-flex items-center text-sm font-montserrat hover:opacity-70 transition-opacity"
                  >
                    <span className="mr-2">More</span>
                    <span className="w-4 h-px bg-current" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
