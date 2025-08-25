import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TerroirHub | 日本のものづくりを世界へ（IT補助金対象）",
  description: "無料の多言語カタログから始める、越境DXプラットフォーム。補助金を活用して、最短1ヶ月で海外展開を。",
  openGraph: {
    title: "TerroirHub | 日本のものづくりを世界へ",
    description: "無料の多言語カタログから始める、越境DXプラットフォーム。補助金を活用して、最短1ヶ月で海外展開を。",
    type: "website",
    locale: "ja_JP",
    siteName: "TerroirHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "TerroirHub | 日本のものづくりを世界へ",
    description: "無料の多言語カタログから始める、越境DXプラットフォーム。補助金を活用して、最短1ヶ月で海外展開を。",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
