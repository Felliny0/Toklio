import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Toklio - TikTok Video Downloader Without Watermark | HD TikTok Saver",

  description:
    "Toklio is a fast and modern TikTok video downloader that lets you download TikTok videos without watermark in HD quality. Save viral TikTok clips instantly with no login required. Free TikTok downloader for mobile and desktop users.",

  keywords: [
    // ENGLISH
    "tiktok downloader",
    "tiktok video downloader",
    "download tiktok video",
    "download tiktok videos",
    "tiktok without watermark",
    "tiktok no watermark",
    "hd tiktok downloader",
    "save tiktok videos",
    "free tiktok downloader",
    "fast tiktok downloader",
    "tiktok mp4 downloader",
    "viral video downloader",
    "online tiktok saver",
    "social media downloader",
    "video saver hd",
    "toklio",
    "snaptik alternative",
    "musicallydown alternative",

    // TURKISH
    "tiktok video indir",
    "filigransız tiktok indir",
    "tiktok indirici",
    "tiktok videosu indir",
    "hd tiktok indir",
    "tiktok mp4 indir",
    "ücretsiz video indirici",
    "video indir",
    "reels indir",
    "instagram reels indir",

    // GERMAN
    "tiktok video herunterladen",
    "tiktok downloader ohne wasserzeichen",
    "kostenloser tiktok downloader",
    "hd tiktok videos herunterladen",
    "tiktok video speichern",

    // FRENCH
    "telecharger video tiktok",
    "telecharger tiktok sans filigrane",
    "telechargeur tiktok gratuit",
    "video tiktok hd",
    "sauvegarder video tiktok",

    // SPANISH
    "descargar video tiktok",
    "descargar tiktok sin marca de agua",
    "tiktok downloader gratis",
    "guardar videos tiktok",
    "videos tiktok hd",

    // RUSSIAN
    "скачать видео тикток",
    "тикток без водяного знака",
    "загрузчик тикток",
    "скачать тикток hd",
    "сохранить видео тикток",

    // EXTRA SAFE SEO
    "youtube shorts downloader",
    "instagram downloader",
    "short video downloader",
    "download viral videos",
    "save social videos",
    "online video downloader",
    "hd mp4 downloader",
    "best tiktok saver",
    "mobile video downloader",
    "anonymous tiktok downloader",
  ],

  openGraph: {
    title: "Toklio - TikTok Downloader",
    description:
      "Download TikTok videos without watermark in HD quality instantly.",
    url: "https://toklio.app",
    siteName: "Toklio",
    type: "website",
  },
};
  


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    > 
  
  
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2248611477017964"
      crossOrigin="anonymous"
    ></script>

    <body className="min-h-full flex flex-col">
      {children}
    </body>
  </html>
);
}

  

