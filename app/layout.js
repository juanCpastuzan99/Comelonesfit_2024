import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/componentes/Nav";
import Header from "@/componentes/Header";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";
import Image from "next/image";


export const metadata = {
  title: "ComelonesFit",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>

        <Header />
        <Nav />
        {children}

      </body>
    </html>
  );
}
