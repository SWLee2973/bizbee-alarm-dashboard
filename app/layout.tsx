import Layout from "@/components/provider/layout";
import { QueryProvider } from "@/components/provider/query";
import SessionProvider from "@/components/provider/session";
import "@/globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";

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
      {/* <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              try {
                // localStorage에서 저장된 테마 값을 불러오고, 없다면 기본값 'light'를 사용
                var theme = localStorage.getItem('theme') || 'light';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {
                console.error('테마 설정 오류:', e);
              }
            })();
          `}
        </Script>
      </head> */}
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
