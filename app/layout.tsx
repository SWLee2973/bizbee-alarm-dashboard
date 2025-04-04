import Layout from "@/components/provider/layout";
import { QueryProvider } from "@/components/provider/query";
import SessionProvider from "@/components/provider/session";
import "@/globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { Metadata } from "next";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Bizbee Notice",
  description: "비즈비 푸쉬 알림 대시보드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className={`${pretendard.className} antialiased`}>
        <QueryProvider>
          <SessionProvider>
            <Layout>{children}</Layout>
          </SessionProvider>
          <ReactQueryDevtools />
        </QueryProvider>
      </body>
    </html>
  );
}
