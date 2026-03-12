import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sri Soumya Narasimhadevara | Full-Stack Engineer",
  description:
    "Portfolio of Sri Soumya Narasimhadevara — Senior Lead Full-Stack Engineer specializing in React, Node.js, cloud-native systems, and enterprise application development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
