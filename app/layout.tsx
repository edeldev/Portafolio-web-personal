import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { DynamicTitle, Header } from "@/components";
import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edeldev - Portafolio Personal",
  description:
    "Diseño y desarrollo de páginas web modernas, responsivas y optimizadas para atraer clientes. ¡Lleva tu presencia digital al siguiente nivel!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${urbanist.className} bg-[#10101a] dark:bg-[#CCCDCB]`}>
        <ThemeProvider>
          <DynamicTitle />
          <Header />
          {children}
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
