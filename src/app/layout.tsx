import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/provider/ThemeProvider";
import Header from "@/components/layout/Header";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";

const MobileDock = dynamic(() => import("@/components/layout/MobileDock"), {
  ssr: false,
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

export const metadata: Metadata = {
  title: "Kiya Kebe | Fullstack Web Developer & Designer",
  description:
    "Experienced software engineer with a proven track record of delivering innovative solutions. Passionate about collaborating with teams to create scalable, high-performance applications.",
  icons: {
    icon: "/logoLight.png",
  },
  authors: [{ name: "Kiya Kebe" }],
  openGraph: {
    title: "Kiya Kebe | Fullstack Web Developer & Designer",
    description:
      "Experienced software engineer with a proven track record of delivering innovative solutions. Passionate about collaborating with teams to create scalable, high-performance applications.",
    images: [
      {
        url: "/kiya-kebe.webp",
        width: 800,
        height: 600,
        alt: "Kiya Kebe",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div>
            <ToastContainer position="top-center" theme="colored" />
            <div className="hidden md:block">
              <Header />
            </div>
            {children}
            <Footer />
            <MobileDock />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
