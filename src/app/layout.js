import "./globals.css";
import Navbar from "./components/Navbar";
import { NTR } from "next/font/google";   // swap Inter → NTR

const ntr = NTR({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "furtuna's portfolio",
  description: "portfolio site built with next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ntr.className} bg-[#0a192f] text-[#ccd6f6] antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
