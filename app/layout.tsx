import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import type { Metadata } from "next";
import { Fira_Sans, Montserrat } from "next/font/google";
import "../styles/style.scss";

const primaryFont = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-primary",
});
const secondaryFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Just another portfolio project",
  description: "Another portfolio project with Next+TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${primaryFont.variable} ${secondaryFont.variable} layout`}
      lang="en"
    >
      <body>
        <Navbar />
        <div className="container">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
