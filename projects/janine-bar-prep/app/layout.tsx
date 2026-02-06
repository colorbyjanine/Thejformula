import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Janine's Bar Prep | California Bar Exam Study App",
  description: "Master the California Bar Exam with comprehensive outlines, flashcards, and practice questions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
