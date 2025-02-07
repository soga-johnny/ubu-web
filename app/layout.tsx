import type { Metadata } from "next";
import { Zen_Kaku_Gothic_Antique } from "next/font/google";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_Antique({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-zen-kaku",
});

export const metadata: Metadata = {
  title: "BOOKSTORE",
  description: "あなたの本との出会いの場所",
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
