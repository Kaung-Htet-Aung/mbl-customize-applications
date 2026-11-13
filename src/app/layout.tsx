import { DM_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MBL Customize Applications",
  description:
    "All your applications in one place. Find a tool and open it in a new tab.",
  applicationName: "MBL Customize Applications",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
        <link rel="apple-touch-icon" href="/icons/logo.png" sizes="180x180" />
        <meta name="theme-color" content="#006838" />
      </head>
      <body>{children}</body>
    </html>
  );
}
