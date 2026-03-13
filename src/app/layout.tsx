import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "Quick Moments | Instant Reel Makers in Hyderabad",
  description:
    "Quick Moments is a Hyderabad-only instant reels maker service for brands, events, and creators.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-black">
        {children}

        {/* Mobile Bottom Navigation */}
        <BottomNav />
      </body>
    </html>
  );
}
