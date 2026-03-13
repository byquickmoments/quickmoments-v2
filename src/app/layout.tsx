import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata: Metadata = {
  title: "Quick Moments | Instant Reel Makers in Hyderabad",
  description:
    "Quick Moments is a Hyderabad-only instant reels maker service for brands, events, and creators. Fast on-site shoots, quick edits, and WhatsApp booking.",
  keywords:
    "instant reels makers in Hyderabad, reel makers Hyderabad, short video production Hyderabad, quick reels Hyderabad",
  authors: [{ name: "Quick Moments" }],
  openGraph: {
    title: "Quick Moments | Instant Reel Makers in Hyderabad",
    description:
      "Hyderabad's instant reel makers for brands and events. Book now on WhatsApp and get fast reel delivery.",
    type: "website",
    siteName: "Quick Moments",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick Moments | Instant Reel Makers in Hyderabad",
    description:
      "Instant reels makers in Hyderabad. Short-form shoots, edits, and quick delivery for brands and creators.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased pb-safe">
        {children}
        {/* Instagram-style bottom nav — mobile only */}
        <BottomNav />
      </body>
    </html>
  );
}
