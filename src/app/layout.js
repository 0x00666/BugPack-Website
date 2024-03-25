import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BugPack",
  description: "A modpack for Minecraft 1.20.1",
  image: "/bugpack-logo.png",
  url: "https://bug-pack-website.vercel.app/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta property="og:URL" content={metadata.url} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={metadata.image} />

      <link rel="shortcut icon" href="/img/favicon.ico" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
