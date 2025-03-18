import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/globals.css";
import NavBar from "@/components/ui/NavBar";
import Header from "@/components/ui/Header";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryProvider } from "@/components/provider/query";
import SessionProvider from "@/components/provider/session";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Bizbee Middleware",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body
        className={`${pretendard.className} antialiased md:flex min-h-screen min-w-[360px]`}
      >
        <QueryProvider>
          <SessionProvider>
            <NavBar />
            <div className="flex flex-1 md:pe-4 md:py-4 max-md:min-h-[calc(100svh-96px)] max-md:px-4 flex-col">
              <Header />
              {children}
            </div>
          </SessionProvider>
          <ReactQueryDevtools />
        </QueryProvider>
      </body>
    </html>
  );
}
