import localFont from "next/font/local";
import { Big_Shoulders_Display } from "next/font/google";
import "./sass/layout/_index.scss";
import Footer from "./components/Footer";

const bigShouldersDisplay = Big_Shoulders_Display({
  subsets: ["latin"],
  variable: "--font-big-shoulders-display",
  weight: ["300", "400", "700", "900"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Art Gallery Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bigShouldersDisplay.variable} antialiased`}
      >
        {children}

        <Footer />
      </body>
    </html>
  );
}
