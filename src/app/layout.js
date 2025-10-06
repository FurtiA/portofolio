import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "furtuna's portfolio",
  description: "portfolio site built with next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FAFAFA] text-[#2C2C2C]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
