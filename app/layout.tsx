import type { Metadata } from "next";
import { Zen_Kaku_Gothic_Antique } from "next/font/google";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_Antique({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-zen-kaku",
});

export const metadata: Metadata = {
  title: "ubu book store",
  description: "日本からカルチャーを産む、大阪・中津の本屋さん",
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://ubu-web.vercel.app/',
    title: 'ubu book store',
    description: '日本からカルチャーを産む、大阪・中津の本屋さん',
    siteName: 'UBU書店',
    images: [
      {
        url: '/ogp.png',
        width: 1280,
        height: 720,
        alt: 'ubu book store',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ubu book store',
    description: '日本からカルチャーを産む、大阪・中津の本屋さん',
    images: ['/ogp.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${zenKaku.variable} font-zen min-h-screen flex flex-col bg-[#EEF2F6]`}>
        {children}
      </body>
    </html>
  );
}
