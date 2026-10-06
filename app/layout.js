import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Floating from "@/components/Floating";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "TripSthan – Explore India Your Way",
  description:
    "Golden Triangle Tour India, Private Delhi Agra Jaipur Cab, Himachal Holiday Package and Same Day Taj Mahal Tour by Car.",
  keywords: [
    "Golden Triangle Tour India",
    "Private Delhi Agra Jaipur Cab",
    "Himachal Holiday Package",
    "Same Day Taj Mahal Tour by Car",
  ],
  icons: {
    icon: [{ url: "/favicon.png" }, { url: "/favicon.ico" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${poppins.className} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Floating />
      </body>
    </html>
  );
}
