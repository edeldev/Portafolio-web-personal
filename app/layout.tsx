import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Header } from "@/components";
import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edeldev - Portafolio Personal",
  description: "Sitio web personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanist.className} bg-[#10101a] dark:bg-[#CCCDCB]`}>
        <ThemeProvider>
          <Header />
          {children}
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
