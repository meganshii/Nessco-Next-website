import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/montserrat";
import NavbarDemo from "@/components/Navbar/Navbar";
import "@fontsource/alex-brush";
import Footer from "@/components/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Nessco India",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <NavbarDemo />
        {children}
      <Footer/>
      </body>
    </html>
  );
}
