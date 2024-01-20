import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Describing UI",
  description: "App dedicated for learning first chapter of react docs.",
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
