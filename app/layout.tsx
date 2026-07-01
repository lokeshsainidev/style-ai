import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STYLE AI",
  description: "AI Fashion Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}