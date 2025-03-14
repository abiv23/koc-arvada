import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClientBody } from "./ClientBody";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Knights of Columbus Council 12392",
  description: "Official website of the Knights of Columbus Council 12392, dedicated to the principles of Charity, Unity, Fraternity, and Patriotism.",
  keywords: "Knights of Columbus, KofC, Council 12392, Catholic, charity, fraternal organization, St. Joan of Arc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <ClientBody>{children}</ClientBody>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
